const express = require('express');
const router = express.Router();
const battle_teamController = require('../controllers/battle_teamController');
const { handleErrors } = require('../utils/error')

// Route to get a battle team by ID
router.get('/:id', handleErrors(battle_teamController.getBattleTeamById));

// Route to create a new battle team
router.post('/', handleErrors(battle_teamController.createBattleTeam));

// Route to update a battle team by ID
router.put('/:id', handleErrors(battle_teamController.updateBattleTeamById));

// Route to delete a battle team by ID
router.delete('/:id', handleErrors(battle_teamController.deleteBattleTeamById));

module.exports = router;