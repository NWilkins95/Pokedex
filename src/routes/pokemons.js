const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonsController');
const { handleErrors } = require('../utils/error')

// Get all pokemons
router.get('/', handleErrors(pokemonController.getAllPokemons));

// Get a pokemon by ID
router.get('/:id', handleErrors(pokemonController.getPokemonById));

module.exports = router;
