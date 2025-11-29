const mongodb = require('../db/connect');
const { ObjectId } = require('mongodb');
const battleHistoryController = {};

// Get all battle history records
battleHistoryController.getAllBattleHistory = async (req, res) => {
  try {
    const history = await mongodb.getDb().collection('battlehistories').find().toArray();
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
    const historyId = new ObjectId(req.params.id);
    const history = await mongodb.getDb().collection('battlehistories').findOne({ _id: historyId });
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
    const teamId = new ObjectId(req.params.teamId);
    const history = await mongodb.getDb().collection('battlehistories').find({ battle_team_id: teamId }).toArray();
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
    
    // First find the team(s) with this name
    const teams = await mongodb.getDb().collection('battle_teams').find({ team_name: new RegExp(teamName, 'i') }).toArray();
    
    if (teams.length === 0) {
      return res.status(404).json({ error: "No teams found with that name." });
    }

    // Get history for all teams with this name
    const teamIds = teams.map(team => team._id);
    const history = await mongodb.getDb().collection('battlehistories').find({ 
      battle_team_id: { $in: teamIds } 
    }).toArray();

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
    const { user_id, battle_team_id, battle_date, result, notes } = req.body;

    // Validate result
    if (!['win', 'loss', 'draw'].includes(result)) {
      return res.status(400).json({ error: "Result must be 'win', 'loss', or 'draw'." });
    }

    const newHistory = {
      user_id: new ObjectId(user_id),
      battle_team_id: new ObjectId(battle_team_id),
      battle_date: new Date(battle_date),
      result,
      notes: notes || '',
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const result_db = await mongodb.getDb().collection('battlehistories').insertOne(newHistory);
    res.status(201).json({ message: "Battle history record created successfully.", id: result_db.insertedId });
  } catch (err) {
    console.error("Error creating battle history:", err);
    res.status(500).json({ error: "An error occurred while creating the battle history record." });
  }
};

// Update a battle history record by ID
battleHistoryController.updateBattleHistoryById = async (req, res) => {
  try {
    const historyId = new ObjectId(req.params.id);
    const { result, battle_date, ...otherUpdates } = req.body;

    // Validate result if provided
    if (result && !['win', 'loss', 'draw'].includes(result)) {
      return res.status(400).json({ error: "Result must be 'win', 'loss', or 'draw'." });
    }

    const updatedData = {
      ...otherUpdates,
      ...(result && { result }),
      ...(battle_date && { battle_date: new Date(battle_date) }),
      updatedAt: new Date()
    };

    const result_db = await mongodb.getDb().collection('battlehistories').updateOne(
      { _id: historyId },
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
    const historyId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().collection('battlehistories').deleteOne({ _id: historyId });
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
