const mongoose = require('mongoose');

const moveSchema = new mongoose.Schema({
  move_id: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
    unique: true
  },
  type: {
    type: String,
    required: true,
    enum: ['Normal', 'Fire', 'Water', 'Electric', 'Grass', 'Ice', 'Fighting', 'Poison', 'Ground', 'Flying', 'Psychic', 'Bug', 'Rock', 'Ghost', 'Dragon']
  },
  category: {
    type: String,
    required: true,
    enum: ['Physical', 'Special', 'Status']
  },
  power: {
    type: Number,
    min: 0,
    default: null
  },
  accuracy: {
    type: Number,
    min: 0,
    max: 100,
    default: null
  },
  pp: {
    type: Number,
    required: true,
    min: 1
  },
  secondary_effects: {
    type: String,
    default: null
  },
  notes: String
}, {
  timestamps: true
});

// Make Moves collection read-only after initial population
moveSchema.pre('save', function(next) {
  if (!this.isNew) {
    return next(new Error('Move data is read-only'));
  }
  next();
});

moveSchema.pre('findOneAndUpdate', function(next) {
  next(new Error('Move data is read-only'));
});

moveSchema.pre('updateOne', function(next) {
  next(new Error('Move data is read-only'));
});

moveSchema.pre('updateMany', function(next) {
  next(new Error('Move data is read-only'));
});

module.exports = mongoose.model('Move', moveSchema);
