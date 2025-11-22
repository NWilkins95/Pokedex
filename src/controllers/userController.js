const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;
const userController = {};

// Get a user by username
userController.getUserByUsername = async (req, res) => {
  try {
    const username = req.params.username;
    const user = await mongodb.getDb().collection('users').findOne({ username: username });
    if (user) {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: "User not found." });
    }
  } catch (err) {
    console.error("Error fetching user by username:", err);
    res.status(500).json({ error: "An error occurred while fetching the user." });
  }
};

// Create a new user
userController.createUser = async (req, res) => {
  try {
    const newUser = req.body;
    const result = await mongodb.getDb().collection('users').insertOne(newUser); 
    res.status(201).json(result.ops[0]);
  } catch (err) {
    console.error("Error creating user:", err);
    res.status(500).json({ error: "An error occurred while creating the user." });
  }
};

// NEED TO ADD UPDATE FUNCTIONALITY
// Update a user by username
userController.updateUserByUsername = async (req, res) => {
  try {
    const username = req.params.username;
    const updatedUser = req.body;
    const result = await mongodb.getDb().collection('users').updateOne(
      { username: username },
      { $set: updatedUser }
    );
    if (result.matchedCount > 0) {
      res.status(200).json({ message: "User updated successfully." });
    } else {
      res.status(404).json({ error: "User not found." });
    }
  } catch (err) {
    console.error("Error updating user by username:", err);
    res.status(500).json({ error: "An error occurred while updating the user." });
  }
};

// Delete a user by username
userController.deleteUserByUsername = async (req, res) => {
  try {
    const username = req.params.username;
    const result = await mongodb.getDb().collection('users').deleteOne({ username: username });
    if (result.deletedCount > 0) {
      res.status(200).json({ message: "User deleted successfully." });
    } else {
      res.status(404).json({ error: "User not found." });
    }
  } catch (err) {
    console.error("Error deleting user by username:", err);
    res.status(500).json({ error: "An error occurred while deleting the user." });
  }
};

module.exports = userController;