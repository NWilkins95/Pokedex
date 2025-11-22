const express = require('express');
const router = express.Router();
const battle_teamController = require('../controllers/battle_teamController');

// Route to get a battle team by ID
router.get('/:id', battle_teamController.getBattleTeamById);

// Route to create a new battle team
router.post('/', battle_teamController.createBattleTeam);

// Route to update a battle team by ID
router.put('/:id', battle_teamController.updateBattleTeamById);

// Route to delete a battle team by ID
router.delete('/:id', battle_teamController.deleteBattleTeamById);

module.exports = router;