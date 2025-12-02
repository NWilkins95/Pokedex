const express = require('express');
const router = express.Router();
const battle_teamController = require('../controllers/battle_teamController');
const validate = require('../utils/validate');
const { handleErrors } = require('../utils/error');
const { checkLogin } = require('../utils/index');

// Route to get all battle teams
router.get('/', validate.validateGetAll, handleErrors(battle_teamController.getAllBattleTeams));

// Route to get a battle team by ID
router.get('/:id', checkLogin, validate.validateBattleTeamId, handleErrors(battle_teamController.getBattleTeamById));

// Route to get battle teams by name
router.get('/name/:name', validate.validateBattleTeamByName, handleErrors(battle_teamController.getBattleTeamByName));

// Route to create a new battle team
router.post('/', checkLogin, validate.validateBattleTeamCreate, handleErrors(battle_teamController.createBattleTeam));

// Route to update a battle team by ID
router.put('/:id', checkLogin, validate.validateBattleTeamUpdate, handleErrors(battle_teamController.updateBattleTeamById));

// Route to delete a battle team by ID
router.delete('/:id', checkLogin, validate.validateBattleTeamId, handleErrors(battle_teamController.deleteBattleTeamById));

module.exports = router;