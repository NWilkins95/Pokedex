const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
  pokedex_number: {
    type: Number,
    required: true,
    unique: true,
    min: 1,
    max: 151
  },
  name: {
    type: String,
    required: true,
    unique: true
  },
  type: {
    type: [String],
    required: true,
    enum: ['Normal', 'Fire', 'Water', 'Electric', 'Grass', 'Ice', 'Fighting', 'Poison', 'Ground', 'Flying', 'Psychic', 'Bug', 'Rock', 'Ghost', 'Dragon']
  },
  evolution_stages: {
    stage: {
      type: Number,
      min: 1,
      max: 3
    },
    evolves_from: String,
    evolves_to: String,
    evolution_level: Number
  },
  abilities: [String],
  base_stats: {
    hp: { type: Number, required: true },
    attack: { type: Number, required: true },
    defense: { type: Number, required: true },
    special_attack: { type: Number, required: true },
    special_defense: { type: Number, required: true },
    speed: { type: Number, required: true }
  },
  max_stats: {
    hp: { type: Number, required: true },
    attack: { type: Number, required: true },
    defense: { type: Number, required: true },
    special_attack: { type: Number, required: true },
    special_defense: { type: Number, required: true },
    speed: { type: Number, required: true }
  },
  image_url: String,
  isTestData: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

// Make Pokemon collection read-only after initial population
pokemonSchema.pre('save', function(next) {
  if (!this.isNew) {
    return next(new Error('Pokemon data is read-only'));
  }
  next();
});

pokemonSchema.pre('findOneAndUpdate', function(next) {
  next(new Error('Pokemon data is read-only'));
});

pokemonSchema.pre('updateOne', function(next) {
  next(new Error('Pokemon data is read-only'));
});

pokemonSchema.pre('updateMany', function(next) {
  next(new Error('Pokemon data is read-only'));
});

module.exports = mongoose.model('Pokemon', pokemonSchema);
