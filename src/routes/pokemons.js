const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonsController');
const validate = require('../utils/validate');
const { handleErrors } = require('../utils/error')

// Get all pokemons
router.get('/', validate.validateGetAll, handleErrors(pokemonController.getAllPokemons));

// Get a pokemon by ID
router.get('/:id', validate.validatePokemonId, handleErrors(pokemonController.getPokemonById));

module.exports = router;
