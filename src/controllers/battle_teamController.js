const BattleTeam = require('../models/BattleTeam');
const mongoose = require('mongoose');
const battle_teamController = {};

// Get all battle teams
battle_teamController.getAllBattleTeams = async (req, res) => {
  try {
    const teams = await BattleTeam.find().lean();
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(teams);
  } catch (err) {
    console.error("Error fetching battle teams:", err);
    res.status(500).json({ error: "An error occurred while fetching battle teams." });
  }
};

// Get a battle team by ID
battle_teamController.getBattleTeamById = async (req, res) => {
  try {
    const team = await BattleTeam.findById(req.params.id).lean();
    if (team) {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(team);
    } else {
      res.status(404).json({ error: "Battle team not found." });
    }
  } catch (err) {
    console.error("Error fetching battle team by ID:", err);
    res.status(500).json({ error: "An error occurred while fetching the battle team." });
  }
};

// Get battle teams by name
battle_teamController.getBattleTeamByName = async (req, res) => {
  try {
    const teamName = req.params.name;
    // model field is `name_of_team`
    const teams = await BattleTeam.find({ name_of_team: new RegExp(teamName, 'i') }).lean();
    if (teams.length > 0) {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(teams);
    } else {
      res.status(404).json({ error: "No battle teams found with that name." });
    }
  } catch (err) {
    console.error("Error fetching battle team by name:", err);
    res.status(500).json({ error: "An error occurred while fetching battle teams." });
  }
};

// Create a new battle team
battle_teamController.createBattleTeam = async (req, res) => {
  try {
    const { name_of_team, custom_pokemon_ids } = req.body;

    // Validate max 6 Pokemon
    if (!custom_pokemon_ids || custom_pokemon_ids.length === 0) {
      return res.status(400).json({ error: "Team must have at least 1 Pokemon." });
    }
    if (custom_pokemon_ids.length > 6) {
      return res.status(400).json({ error: "Team can have a maximum of 6 Pokemon." });
    }

    // Map incoming payload to model shape: store custom IDs in the `pokemon` array as `pokemon_id` entries.
    const pokemonArr = custom_pokemon_ids.map(id => ({ pokemon_id: mongoose.Types.ObjectId(id) }));

    const newTeam = new BattleTeam({
      name_of_team: name_of_team,
      pokemon: pokemonArr
    });

    const saved = await newTeam.save();
    res.status(201).json({ message: "Battle team created successfully.", id: saved._id });
  } catch (err) {
    console.error("Error creating battle team:", err);
    res.status(500).json({ error: "An error occurred while creating the battle team." });
  }
};

// Update a battle team by ID
battle_teamController.updateBattleTeamById = async (req, res) => {
  try {
    const { custom_pokemon_ids, team_name, ...otherUpdates } = req.body;

    // Validate max 6 Pokemon if updating pokemon list
    if (custom_pokemon_ids) {
      if (custom_pokemon_ids.length === 0) {
        return res.status(400).json({ error: "Team must have at least 1 Pokemon." });
      }
      if (custom_pokemon_ids.length > 6) {
        return res.status(400).json({ error: "Team can have a maximum of 6 Pokemon." });
      }
    }

    const updatedData = { ...otherUpdates };
    if (team_name) updatedData.name_of_team = team_name;
    if (custom_pokemon_ids) updatedData.pokemon = custom_pokemon_ids.map(id => ({ pokemon_id: mongoose.Types.ObjectId(id) }));

    const result = await BattleTeam.updateOne({ _id: req.params.id }, { $set: updatedData });

    if (result.matchedCount > 0) {
      res.status(200).json({ message: "Battle team updated successfully." });
    } else {
      res.status(404).json({ error: "Battle team not found." });
    }
  } catch (err) {
    console.error("Error updating battle team:", err);
    res.status(500).json({ error: "An error occurred while updating the battle team." });
  }
};

// Delete a battle team by ID
battle_teamController.deleteBattleTeamById = async (req, res) => {
  try {
    const result = await BattleTeam.deleteOne({ _id: req.params.id });
    if (result.deletedCount > 0) {
      res.status(200).json({ message: "Battle team deleted successfully." });
    } else {
      res.status(404).json({ error: "Battle team not found." });
    }
  } catch (err) {
    console.error("Error deleting battle team:", err);
    res.status(500).json({ error: "An error occurred while deleting the battle team." });
  }
};

module.exports = battle_teamController;