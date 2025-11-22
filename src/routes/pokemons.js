const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonsController');

// Get all pokemons
router.get('/', pokemonController.getAllPokemons);

// Get a pokemon by ID
router.get('/:id', pokemonController.getPokemonById);

module.exports = router;
