const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },
  password_hash: {
    type: String,
    required: true
  },
  team: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'BattleTeam'
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);
