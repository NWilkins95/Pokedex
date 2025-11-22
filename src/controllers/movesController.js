const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;
const movesController = {};

// Get all moves
movesController.getAllMoves = async (req, res) => {
  try {
    const moves = await mongodb.getDb().db().collection('moves').find().toArray();
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(moves);
  } catch (err) {
    console.error("Error fetching moves:", err);
    res.status(500).json({ error: "An error occurred while fetching moves." });
  }
};

module.exports = movesController;