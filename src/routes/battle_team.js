const express = require('express');
const router = express.Router();
const battle_teamController = require('../controllers/battle_teamController');
const { handleErrors } = require('../utils/error');
const { checkLogin } = require('../utils/index');

// Route to get a battle team by ID
router.get('/:id', checkLogin, handleErrors(battle_teamController.getBattleTeamById));

// Route to create a new battle team
router.post('/', checkLogin, handleErrors(battle_teamController.createBattleTeam));

// Route to update a battle team by ID
router.put('/:id', checkLogin, handleErrors(battle_teamController.updateBattleTeamById));

// Route to delete a battle team by ID
router.delete('/:id', checkLogin, handleErrors(battle_teamController.deleteBattleTeamById));

module.exports = router;