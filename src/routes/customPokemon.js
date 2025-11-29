const express = require('express');
const router = express.Router();
const customPokemonController = require('../controllers/customPokemonController');
const { handleErrors } = require('../utils/error');
const { checkLogin } = require('../utils/index');

// Get all custom pokemons
router.get('/', handleErrors(customPokemonController.getAllCustomPokemons));

// Get a custom pokemon by ID
router.get('/:id', handleErrors(customPokemonController.getCustomPokemonById));

// Get custom pokemons by name
router.get('/name/:name', handleErrors(customPokemonController.getCustomPokemonByName));

// Create a new custom pokemon
router.post('/', checkLogin, handleErrors(customPokemonController.createCustomPokemon));

// Update a custom pokemon by ID
router.put('/:id', checkLogin, handleErrors(customPokemonController.updateCustomPokemonById));

// Delete a custom pokemon by ID
router.delete('/:id', checkLogin, handleErrors(customPokemonController.deleteCustomPokemonById));

module.exports = router;
