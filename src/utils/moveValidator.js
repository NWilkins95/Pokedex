const PokemonLearnset = require('../models/PokemonLearnset');
const Move = require('../models/Move');

/**
 * Get all moves a Pokemon can learn, optionally filtered by level
 * @param {ObjectId} pokemonId - The Pokemon's database ID
 * @param {Number} currentLevel - The Pokemon's current level (optional)
 * @returns {Array} Array of learnable moves
 */
async function getLearnableMoves(pokemonId, currentLevel = 100) {
  try {
    const learnset = await PokemonLearnset.findOne({ pokemon_id: pokemonId })
      .populate('learnset.move_id');

    if (!learnset) {
      return [];
    }

    // Filter moves based on level and learn method
    const learnableMoves = learnset.learnset.filter(entry => {
      // TMs, HMs, and tutor moves can always be learned regardless of level
      if (['tm', 'hm', 'tutor'].includes(entry.learn_method)) {
        return true;
      }
      
      // Starting moves and level-up moves must meet level requirement
      if (entry.learn_method === 'start' || entry.learn_method === 'level-up') {
        return entry.level_learned <= currentLevel;
      }
      
      return false;
    });

    return learnableMoves;
  } catch (error) {
    console.error('Error fetching learnable moves:', error);
    throw error;
  }
}

/**
 * Validate if a Pokemon can learn a specific move at their current level
 * @param {ObjectId} pokemonId - The Pokemon's database ID
 * @param {ObjectId} moveId - The move's database ID
 * @param {Number} currentLevel - The Pokemon's current level
 * @returns {Boolean} True if Pokemon can learn the move
 */
async function canLearnMove(pokemonId, moveId, currentLevel) {
  try {
    const learnset = await PokemonLearnset.findOne({ pokemon_id: pokemonId });

    if (!learnset) {
      return false;
    }

    const moveEntry = learnset.learnset.find(
      entry => entry.move_id.toString() === moveId.toString()
    );

    if (!moveEntry) {
      return false;
    }

    // TMs, HMs, and tutor moves can be learned at any level
    if (['tm', 'hm', 'tutor'].includes(moveEntry.learn_method)) {
      return true;
    }

    // Level-up and starting moves must meet level requirement
    if (moveEntry.learn_method === 'start' || moveEntry.learn_method === 'level-up') {
      return moveEntry.level_learned <= currentLevel;
    }

    return false;
  } catch (error) {
    console.error('Error validating move:', error);
    throw error;
  }
}

/**
 * Validate an array of moves for a Pokemon
 * @param {ObjectId} pokemonId - The Pokemon's database ID
 * @param {Array} moveIds - Array of move IDs to validate
 * @param {Number} currentLevel - The Pokemon's current level
 * @returns {Object} Validation result with valid/invalid moves
 */
async function validateMoves(pokemonId, moveIds, currentLevel) {
  try {
    // Pokemon can only have up to 4 moves
    if (moveIds.length > 4) {
      return {
        valid: false,
        error: 'Pokemon can only have up to 4 moves',
        validMoves: [],
        invalidMoves: moveIds
      };
    }

    const validMoves = [];
    const invalidMoves = [];

    for (const moveId of moveIds) {
      const canLearn = await canLearnMove(pokemonId, moveId, currentLevel);
      if (canLearn) {
        validMoves.push(moveId);
      } else {
        invalidMoves.push(moveId);
      }
    }

    return {
      valid: invalidMoves.length === 0,
      validMoves,
      invalidMoves,
      error: invalidMoves.length > 0 
        ? 'Some moves cannot be learned by this Pokemon at the current level'
        : null
    };
  } catch (error) {
    console.error('Error validating moves:', error);
    throw error;
  }
}

/**
 * Get moves grouped by learn method
 * @param {ObjectId} pokemonId - The Pokemon's database ID
 * @param {Number} currentLevel - The Pokemon's current level
 * @returns {Object} Moves grouped by learn method
 */
async function getMovesGroupedByMethod(pokemonId, currentLevel = 100) {
  try {
    const learnableMoves = await getLearnableMoves(pokemonId, currentLevel);

    const grouped = {
      'level-up': [],
      'tm': [],
      'hm': [],
      'tutor': [],
      'start': []
    };

    learnableMoves.forEach(entry => {
      if (grouped[entry.learn_method]) {
        grouped[entry.learn_method].push({
          move: entry.move_id,
          move_name: entry.move_name,
          level_learned: entry.level_learned,
          tm_hm_number: entry.tm_hm_number
        });
      }
    });

    // Sort level-up moves by level
    grouped['level-up'].sort((a, b) => a.level_learned - b.level_learned);

    return grouped;
  } catch (error) {
    console.error('Error grouping moves:', error);
    throw error;
  }
}

module.exports = {
  getLearnableMoves,
  canLearnMove,
  validateMoves,
  getMovesGroupedByMethod
};
