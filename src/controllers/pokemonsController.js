const Pokemon = require('../models/Pokemon');
const pokemonsController = {};

// Get all pokemons
pokemonsController.getAllPokemons = async (req, res) => {
  try {
    const pokemons = await Pokemon.find().lean();
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(pokemons);
  } catch (err) {
    console.error("Error fetching pokemons:", err);
    res.status(500).json({ error: "An error occurred while fetching pokemons." });
  }
};

// Get a single pokemon by ID
pokemonsController.getPokemonById = async (req, res) => {
  try {
    const pokemon = await Pokemon.findById(req.params.id).lean();
    if (pokemon) {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(pokemon);
    } else {
      res.status(404).json({ error: "Pokemon not found." });
    }
  } catch (err) {
    console.error("Error fetching pokemon by ID:", err);
    res.status(500).json({ error: "An error occurred while fetching the pokemon." });
  }
};

module.exports = pokemonsController;