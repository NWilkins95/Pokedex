const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;
const battle_teamController = {};

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

// Create a new battle team
battle_teamController.createBattleTeam = async (req, res) => {
  try {
    const newTeam = req.body;
    const result = await mongodb.getDb().collection('battle_teams').insertOne(newTeam); 
    res.status(201).json(result.ops[0]);
  } catch (err) {
    console.error("Error creating battle team:", err);
    res.status(500).json({ error: "An error occurred while creating the battle team." });
  }
};

// Update a battle team by ID
battle_teamController.updateBattleTeamById = async (req, res) => {
  try {
    const teamId = new ObjectId(req.params.id);
    const updatedTeam = req.body;
    const result = await mongodb.getDb().collection('battle_teams').updateOne(
      { _id: teamId },
      { $set: updatedTeam }
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