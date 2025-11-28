const express = require('express');
const router = express.Router();
const trainingGuideController = require('../controllers/trainingGuideController');
const { handleErrors } = require('../utils/error');
const { checkLogin } = require('../utils/index');

// Get all training guides
router.get('/', handleErrors(trainingGuideController.getAllTrainingGuides));

// Get a training guide by ID
router.get('/:id', handleErrors(trainingGuideController.getTrainingGuideById));

// Get training guide by custom pokemon ID
router.get('/pokemon/:pokemonId', handleErrors(trainingGuideController.getTrainingGuideByPokemonId));

// Create a new training guide
router.post('/', checkLogin, handleErrors(trainingGuideController.createTrainingGuide));

// Update a training guide by ID
router.put('/:id', checkLogin, handleErrors(trainingGuideController.updateTrainingGuideById));

// Delete a training guide by ID
router.delete('/:id', checkLogin, handleErrors(trainingGuideController.deleteTrainingGuideById));

// Check achievability of EVs/IVs for a custom pokemon
router.post('/check-achievability', handleErrors(trainingGuideController.checkAchievability));

module.exports = router;
