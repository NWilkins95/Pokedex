const express = require('express');
const router = express.Router();
const customPokemonController = require('../controllers/customPokemonController');
const validate = require('../utils/validate');
const { handleErrors } = require('../utils/error');
const { checkLogin } = require('../utils/index');

// Get all custom pokemons
router.get('/', validate.validateGetAll, handleErrors(customPokemonController.getAllCustomPokemons));

// Get a custom pokemon by ID
router.get('/:id', validate.validateCustomPokemonId, handleErrors(customPokemonController.getCustomPokemonById));

// Get custom pokemons by name
router.get('/name/:name', validate.validateCustomPokemonByName, handleErrors(customPokemonController.getCustomPokemonByName));

// Create a new custom pokemon
router.post('/', checkLogin, validate.validateCustomPokemonCreate, handleErrors(customPokemonController.createCustomPokemon));

// Update a custom pokemon by ID
router.put('/:id', checkLogin, validate.validateCustomPokemonUpdate, handleErrors(customPokemonController.updateCustomPokemonById));

// Delete a custom pokemon by ID
router.delete('/:id', checkLogin, validate.validateCustomPokemonId, handleErrors(customPokemonController.deleteCustomPokemonById));

module.exports = router;
