const express = require('express');
const router = express.Router();
const { getLearnableMoves, validateMoves, getMovesGroupedByMethod } = require('../utils/moveValidator');
const BattleTeam = require('../models/BattleTeam');
const { handleErrors } = require('../utils/error');

/**
 * GET /api/pokemon/:pokemonId/moves
 * Get all moves a Pokemon can learn at a specific level
 */
router.get('/pokemon/:pokemonId/moves', handleErrors(async (req, res) => {
  const { pokemonId } = req.params;
  const { level = 100, groupBy } = req.query;

  const currentLevel = parseInt(level);

  if (groupBy === 'method') {
    const groupedMoves = await getMovesGroupedByMethod(pokemonId, currentLevel);
    return res.json({
      success: true,
      pokemon_id: pokemonId,
      level: currentLevel,
      moves: groupedMoves
    });
  }

  const moves = await getLearnableMoves(pokemonId, currentLevel);
  
  res.json({
    success: true,
    pokemon_id: pokemonId,
    level: currentLevel,
    moves: moves.map(entry => ({
      move_id: entry.move_id._id,
      move_name: entry.move_id.name,
      type: entry.move_id.type,
      category: entry.move_id.category,
      power: entry.move_id.power,
      accuracy: entry.move_id.accuracy,
      pp: entry.move_id.pp,
      learn_method: entry.learn_method,
      level_learned: entry.level_learned,
      tm_hm_number: entry.tm_hm_number
    }))
  });
}));

/**
 * POST /api/battle-team/:teamId/pokemon/:pokemonIndex/moves
 * Set moves for a Pokemon in a battle team with validation
 */
router.post('/battle-team/:teamId/pokemon/:pokemonIndex/moves', handleErrors(async (req, res) => {
  const { teamId, pokemonIndex } = req.params;
  const { moveIds } = req.body;

  const team = await BattleTeam.findById(teamId);
  if (!team) {
    return res.status(404).json({
      success: false,
      error: 'Battle team not found'
    });
  }

  const pokemonInTeam = team.pokemon[pokemonIndex];
  if (!pokemonInTeam) {
    return res.status(404).json({
      success: false,
      error: 'Pokemon not found in team at this index'
    });
  }

  // Validate moves
  const validation = await validateMoves(
    pokemonInTeam.pokemon_id,
    moveIds,
    pokemonInTeam.level
  );

  if (!validation.valid) {
    return res.status(400).json({
      success: false,
      error: validation.error,
      invalidMoves: validation.invalidMoves
    });
  }

  // Update moves for this Pokemon
  const existingMoveEntry = team.moves_chosen.find(
    m => m.pokemon_index === parseInt(pokemonIndex)
  );

  if (existingMoveEntry) {
    existingMoveEntry.moves = moveIds;
  } else {
    team.moves_chosen.push({
      pokemon_index: parseInt(pokemonIndex),
      moves: moveIds
    });
  }

  await team.save();

  res.json({
    success: true,
    message: 'Moves updated successfully',
    team: team
  });
}));

module.exports = router;
