const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonController');

// Route to get all pokemons
router.get('/', pokemonController.getAllPokemons);

// Route to get a pokemon by ID
router.get('/:id', pokemonController.getPokemonById);