const User = require('../models/User');
const mongoose = require('mongoose');
const userController = {};

// Get a user by username
userController.getUserByUsername = async (req, res) => {
  try {
    const username = req.params.username;
    const user = await User.findOne({ username }).lean();
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
    const created = await User.create(newUser);
    res.status(201).json(created);
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
    const result = await User.updateOne({ username }, { $set: updatedUser });
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
    const result = await User.deleteOne({ username });
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