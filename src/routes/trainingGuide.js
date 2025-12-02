const express = require('express');
const router = express.Router();
const trainingGuideController = require('../controllers/trainingGuideController');
const validate = require('../utils/validate');
const { handleErrors } = require('../utils/error');
const { checkLogin } = require('../utils/index');

// Get all training guides
router.get('/', validate.validateGetAll, handleErrors(trainingGuideController.getAllTrainingGuides));

// Get a training guide by ID
router.get('/:id', validate.validateTrainingGuideId, handleErrors(trainingGuideController.getTrainingGuideById));

// Get training guide by custom pokemon ID
router.get('/pokemon/:pokemonId', validate.validateTrainingGuideByPokemonId, handleErrors(trainingGuideController.getTrainingGuideByPokemonId));

// Create a new training guide
router.post('/', checkLogin, validate.validateTrainingGuideCreate, handleErrors(trainingGuideController.createTrainingGuide));

// Update a training guide by ID
router.put('/:id', checkLogin, validate.validateTrainingGuideUpdate, handleErrors(trainingGuideController.updateTrainingGuideById));

// Delete a training guide by ID
router.delete('/:id', checkLogin, validate.validateTrainingGuideId, handleErrors(trainingGuideController.deleteTrainingGuideById));

// Check achievability of EVs/IVs for a custom pokemon
router.post('/check-achievability', validate.validateTrainingGuideCreate, handleErrors(trainingGuideController.checkAchievability));

module.exports = router;
