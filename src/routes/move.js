const express = require('express');
const router = express.Router();
const moveController = require('../controllers/moveController');
const validate = require('../utils/validate');
const { handleErrors } = require('../utils/error');

// Get all moves a Pokemon can learn at a specific level
router.get('/pokemon/:pokemonId/moves', validate.validateGetMovesForPokemon, handleErrors(moveController.getMovesForPokemon));

// Assign moves to a Pokemon in a battle team with validation
router.post('/battle-team/:teamId/pokemon/:pokemonIndex/moves', validate.validateAssignMovesToTeamPokemon, handleErrors(moveController.assignMovesToTeamPokemon));

module.exports = router;