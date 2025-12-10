const BattleHistory = require('../models/BattleHistory');
const BattleTeam = require('../models/BattleTeam');
const mongoose = require('mongoose');
const battleHistoryController = {};

// Get all battle history records
battleHistoryController.getAllBattleHistory = async (req, res) => {
  try {
    const history = await BattleHistory.find().lean();
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(history);
  } catch (err) {
    console.error("Error fetching battle history:", err);
    res.status(500).json({ error: "An error occurred while fetching battle history." });
  }
};

// Get a single battle history record by ID
battleHistoryController.getBattleHistoryById = async (req, res) => {
  try {
    const history = await BattleHistory.findById(req.params.id).lean();
    if (history) {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(history);
    } else {
      res.status(404).json({ error: "Battle history record not found." });
    }
  } catch (err) {
    console.error("Error fetching battle history by ID:", err);
    res.status(500).json({ error: "An error occurred while fetching the battle history record." });
  }
};

// Get battle history by team ID
battleHistoryController.getBattleHistoryByTeamId = async (req, res) => {
  try {
    const history = await BattleHistory.find({ battle_team_id: req.params.teamId }).lean();
    if (history.length > 0) {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(history);
    } else {
      res.status(404).json({ error: "No battle history found for this team." });
    }
  } catch (err) {
    console.error("Error fetching battle history by team ID:", err);
    res.status(500).json({ error: "An error occurred while fetching battle history." });
  }
};

// Get battle history by team name
battleHistoryController.getBattleHistoryByTeamName = async (req, res) => {
  try {
    const teamName = req.params.teamName;

    // First find the team(s) with this name (model field is `name_of_team`)
    const teams = await BattleTeam.find({ name_of_team: new RegExp(teamName, 'i') }).lean();

    if (teams.length === 0) {
      return res.status(404).json({ error: "No teams found with that name." });
    }

    const teamIds = teams.map(team => team._id);
    const history = await BattleHistory.find({ battle_team_id: { $in: teamIds } }).lean();

    if (history.length > 0) {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(history);
    } else {
      res.status(404).json({ error: "No battle history found for teams with that name." });
    }
  } catch (err) {
    console.error("Error fetching battle history by team name:", err);
    res.status(500).json({ error: "An error occurred while fetching battle history." });
  }
};

// Create a new battle history record
battleHistoryController.createBattleHistory = async (req, res) => {
  try {
    const { battle_team_id, battle_date, result, notes } = req.body;

    const newHistory = new BattleHistory({
      battle_team_id: new mongoose.Types.ObjectId(battle_team_id),
      battle_date: new Date(battle_date),
      result,
      notes: notes || ''
    });

    const saved = await newHistory.save();
    res.status(201).json({ message: "Battle history record created successfully.", id: saved._id });
  } catch (err) {
    console.error("Error creating battle history:", err);
    res.status(500).json({ error: "An error occurred while creating the battle history record." });
  }
};

// Update a battle history record by ID
battleHistoryController.updateBattleHistoryById = async (req, res) => {
  try {
    const { result, battle_date, ...otherUpdates } = req.body;

    const updatedData = {
      ...otherUpdates,
      ...(result && { result }),
      ...(battle_date && { battle_date: new Date(battle_date) })
    };

    const result_db = await BattleHistory.updateOne(
      { _id: req.params.id },
      { $set: updatedData }
    );

    if (result_db.matchedCount > 0) {
      res.status(200).json({ message: "Battle history record updated successfully." });
    } else {
      res.status(404).json({ error: "Battle history record not found." });
    }
  } catch (err) {
    console.error("Error updating battle history:", err);
    res.status(500).json({ error: "An error occurred while updating the battle history record." });
  }
};

// Delete a battle history record by ID
battleHistoryController.deleteBattleHistoryById = async (req, res) => {
  try {
    const result = await BattleHistory.deleteOne({ _id: req.params.id });
    if (result.deletedCount > 0) {
      res.status(200).json({ message: "Battle history record deleted successfully." });
    } else {
      res.status(404).json({ error: "Battle history record not found." });
    }
  } catch (err) {
    console.error("Error deleting battle history:", err);
    res.status(500).json({ error: "An error occurred while deleting the battle history record." });
  }
};

module.exports = battleHistoryController;
