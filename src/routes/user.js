const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route to get user by username
router.get('/:username', userController.getUserByUsername);

// Route to create a new user
router.post('/', userController.createUser);

// Route to update user by username
router.put('/:username', userController.updateUserByUsername);

// Route to delete user by username
router.delete('/:username', userController.deleteUserByUsername);

module.exports = router;