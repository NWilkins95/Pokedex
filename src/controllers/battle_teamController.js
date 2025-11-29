const mongodb = require('../db/connect');
const { ObjectId } = require('mongodb');
const battle_teamController = {};

// Get all battle teams
battle_teamController.getAllBattleTeams = async (req, res) => {
  try {
    const teams = await mongodb.getDb().collection('battle_teams').find().toArray();
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
    const teamId = new ObjectId(req.params.id);
    const team = await mongodb.getDb().collection('battle_teams').findOne({ _id: teamId });
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
    const teams = await mongodb.getDb().collection('battle_teams').find({ team_name: new RegExp(teamName, 'i') }).toArray();
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
    const { user_id, team_name, custom_pokemon_ids } = req.body;

    // Validate max 6 Pokemon
    if (!custom_pokemon_ids || custom_pokemon_ids.length === 0) {
      return res.status(400).json({ error: "Team must have at least 1 Pokemon." });
    }
    if (custom_pokemon_ids.length > 6) {
      return res.status(400).json({ error: "Team can have a maximum of 6 Pokemon." });
    }

    const newTeam = {
      user_id: new ObjectId(user_id),
      team_name,
      custom_pokemon_ids: custom_pokemon_ids.map(id => new ObjectId(id)),
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const result = await mongodb.getDb().collection('battle_teams').insertOne(newTeam);
    res.status(201).json({ message: "Battle team created successfully.", id: result.insertedId });
  } catch (err) {
    console.error("Error creating battle team:", err);
    res.status(500).json({ error: "An error occurred while creating the battle team." });
  }
};

// Update a battle team by ID
battle_teamController.updateBattleTeamById = async (req, res) => {
  try {
    const teamId = new ObjectId(req.params.id);
    const { custom_pokemon_ids, ...otherUpdates } = req.body;

    // Validate max 6 Pokemon if updating pokemon list
    if (custom_pokemon_ids) {
      if (custom_pokemon_ids.length === 0) {
        return res.status(400).json({ error: "Team must have at least 1 Pokemon." });
      }
      if (custom_pokemon_ids.length > 6) {
        return res.status(400).json({ error: "Team can have a maximum of 6 Pokemon." });
      }
    }

    const updatedData = {
      ...otherUpdates,
      ...(custom_pokemon_ids && { custom_pokemon_ids: custom_pokemon_ids.map(id => new ObjectId(id)) }),
      updatedAt: new Date()
    };

    const result = await mongodb.getDb().collection('battle_teams').updateOne(
      { _id: teamId },
      { $set: updatedData }
    );

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
    const teamId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().collection('battle_teams').deleteOne({ _id: teamId });
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