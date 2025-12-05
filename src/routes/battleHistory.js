const express = require('express');
const router = express.Router();
const battleHistoryController = require('../controllers/battleHistoryController');
const validate = require('../utils/validate');
const { handleErrors } = require('../utils/error');
const { checkLogin } = require('../utils/index');

// Get all battle history records
router.get('/', validate.validateGetAll, handleErrors(battleHistoryController.getAllBattleHistory));

// Get a battle history record by ID
router.get('/:id', validate.validateBattleHistoryId, handleErrors(battleHistoryController.getBattleHistoryById));

// Get battle history by team ID
router.get('/team/:teamId', validate.validateBattleHistoryByTeamId, handleErrors(battleHistoryController.getBattleHistoryByTeamId));

// Get battle history by team name
router.get('/team/name/:teamName', validate.validateBattleHistoryByTeamName, handleErrors(battleHistoryController.getBattleHistoryByTeamName));

// Create a new battle history record
router.post('/', checkLogin, validate.validateBattleHistoryCreate, handleErrors(battleHistoryController.createBattleHistory));

// Update a battle history record by ID
router.put('/:id', checkLogin, validate.validateBattleHistoryUpdate, handleErrors(battleHistoryController.updateBattleHistoryById));

// Delete a battle history record by ID
router.delete('/:id', checkLogin, validate.validateBattleHistoryId, handleErrors(battleHistoryController.deleteBattleHistoryById));

module.exports = router;
