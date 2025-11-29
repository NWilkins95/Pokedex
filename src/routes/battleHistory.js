const express = require('express');
const router = express.Router();
const battleHistoryController = require('../controllers/battleHistoryController');
const { handleErrors } = require('../utils/error');
const { checkLogin } = require('../utils/index');

// Get all battle history records
router.get('/', handleErrors(battleHistoryController.getAllBattleHistory));

// Get a battle history record by ID
router.get('/:id', handleErrors(battleHistoryController.getBattleHistoryById));

// Get battle history by team ID
router.get('/team/:teamId', handleErrors(battleHistoryController.getBattleHistoryByTeamId));

// Get battle history by team name
router.get('/team/name/:teamName', handleErrors(battleHistoryController.getBattleHistoryByTeamName));

// Create a new battle history record
router.post('/', checkLogin, handleErrors(battleHistoryController.createBattleHistory));

// Update a battle history record by ID
router.put('/:id', checkLogin, handleErrors(battleHistoryController.updateBattleHistoryById));

// Delete a battle history record by ID
router.delete('/:id', checkLogin, handleErrors(battleHistoryController.deleteBattleHistoryById));

module.exports = router;
