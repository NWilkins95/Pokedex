const express = require('express');
const router = express.Router();
const movesController = require('../controllers/movesController');

// Route to get all moves
router.get('/', movesController.getAllMoves);