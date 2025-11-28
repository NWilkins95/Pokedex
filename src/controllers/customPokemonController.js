const mongodb = require('../db/connect');
const { ObjectId } = require('mongodb');
const { validateMoves } = require('../utils/moveValidator');
const customPokemonController = {};

// Get all custom pokemons
customPokemonController.getAllCustomPokemons = async (req, res) => {
  try {
    const customPokemons = await mongodb.getDb().collection('custompokemons').find().toArray();
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(customPokemons);
  } catch (err) {
    console.error("Error fetching custom pokemons:", err);
    res.status(500).json({ error: "An error occurred while fetching custom pokemons." });
  }
};

// Get a single custom pokemon by ID
customPokemonController.getCustomPokemonById = async (req, res) => {
  try {
    const customPokemonId = new ObjectId(req.params.id);
    const customPokemon = await mongodb.getDb().collection('custompokemons').findOne({ _id: customPokemonId });
    if (customPokemon) {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(customPokemon);
    } else {
      res.status(404).json({ error: "Custom pokemon not found." });
    }
  } catch (err) {
    console.error("Error fetching custom pokemon by ID:", err);
    res.status(500).json({ error: "An error occurred while fetching the custom pokemon." });
  }
};

// Get custom pokemons by name
customPokemonController.getCustomPokemonByName = async (req, res) => {
  try {
    const nickname = req.params.name;
    const customPokemons = await mongodb.getDb().collection('custompokemons').find({ nickname: new RegExp(nickname, 'i') }).toArray();
    if (customPokemons.length > 0) {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(customPokemons);
    } else {
      res.status(404).json({ error: "No custom pokemons found with that name." });
    }
  } catch (err) {
    console.error("Error fetching custom pokemon by name:", err);
    res.status(500).json({ error: "An error occurred while fetching custom pokemons." });
  }
};

// Create a new custom pokemon with move validation
customPokemonController.createCustomPokemon = async (req, res) => {
  try {
    const { user_id, base_pokemon_id, nickname, level, ability, moves, stats } = req.body;

    // Validate moves
    const validation = await validateMoves(base_pokemon_id, moves, level);
    
    if (!validation.valid) {
      return res.status(400).json({
        error: validation.error,
        invalidMoves: validation.invalidMoves
      });
    }

    const newCustomPokemon = {
      user_id: new ObjectId(user_id),
      base_pokemon_id: new ObjectId(base_pokemon_id),
      nickname,
      level,
      ability,
      moves: moves.map(id => new ObjectId(id)),
      stats,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const result = await mongodb.getDb().collection('custompokemons').insertOne(newCustomPokemon);
    res.status(201).json({ message: "Custom pokemon created successfully.", id: result.insertedId });
  } catch (err) {
    console.error("Error creating custom pokemon:", err);
    res.status(500).json({ error: "An error occurred while creating the custom pokemon." });
  }
};

// Update a custom pokemon by ID with move validation
customPokemonController.updateCustomPokemonById = async (req, res) => {
  try {
    const customPokemonId = new ObjectId(req.params.id);
    const { base_pokemon_id, level, moves, ...otherUpdates } = req.body;

    // If moves are being updated, validate them
    if (moves && base_pokemon_id && level) {
      const validation = await validateMoves(base_pokemon_id, moves, level);
      
      if (!validation.valid) {
        return res.status(400).json({
          error: validation.error,
          invalidMoves: validation.invalidMoves
        });
      }
    }

    const updatedData = {
      ...otherUpdates,
      ...(moves && { moves: moves.map(id => new ObjectId(id)) }),
      ...(level && { level }),
      updatedAt: new Date()
    };

    const result = await mongodb.getDb().collection('custompokemons').updateOne(
      { _id: customPokemonId },
      { $set: updatedData }
    );

    if (result.matchedCount > 0) {
      res.status(200).json({ message: "Custom pokemon updated successfully." });
    } else {
      res.status(404).json({ error: "Custom pokemon not found." });
    }
  } catch (err) {
    console.error("Error updating custom pokemon:", err);
    res.status(500).json({ error: "An error occurred while updating the custom pokemon." });
  }
};

// Delete a custom pokemon by ID
customPokemonController.deleteCustomPokemonById = async (req, res) => {
  try {
    const customPokemonId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().collection('custompokemons').deleteOne({ _id: customPokemonId });
    if (result.deletedCount > 0) {
      res.status(200).json({ message: "Custom pokemon deleted successfully." });
    } else {
      res.status(404).json({ error: "Custom pokemon not found." });
    }
  } catch (err) {
    console.error("Error deleting custom pokemon:", err);
    res.status(500).json({ error: "An error occurred while deleting the custom pokemon." });
  }
};

module.exports = customPokemonController;
