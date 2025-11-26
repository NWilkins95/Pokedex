const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { handleErrors } = require('../utils/error')
const { checkLogin } = require('../utils/index');

// Route to get user by username
router.get('/:username', handleErrors(userController.getUserByUsername));

// Route to create a new user
router.post('/', checkLogin, handleErrors(userController.createUser));

// Route to update user by username
router.put('/:username', checkLogin, handleErrors(userController.updateUserByUsername));

// Route to delete user by username
router.delete('/:username', checkLogin, handleErrors(userController.deleteUserByUsername));

module.exports = router;