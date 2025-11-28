const mongoose = require('mongoose');

const trainingGuideSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  custom_pokemon_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CustomPokemon',
    required: true
  },
  target_evs: {
    hp: { type: Number, min: 0, max: 255, default: 0 },
    attack: { type: Number, min: 0, max: 255, default: 0 },
    defense: { type: Number, min: 0, max: 255, default: 0 },
    special_attack: { type: Number, min: 0, max: 255, default: 0 },
    special_defense: { type: Number, min: 0, max: 255, default: 0 },
    speed: { type: Number, min: 0, max: 255, default: 0 }
  },
  target_ivs: {
    hp: { type: Number, min: 0, max: 31, default: 31 },
    attack: { type: Number, min: 0, max: 31, default: 31 },
    defense: { type: Number, min: 0, max: 31, default: 31 },
    special_attack: { type: Number, min: 0, max: 31, default: 31 },
    special_defense: { type: Number, min: 0, max: 31, default: 31 },
    speed: { type: Number, min: 0, max: 31, default: 31 }
  },
  is_achievable: {
    type: Boolean,
    default: false
  },
  notes: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
});

// Validate total EVs don't exceed 510
trainingGuideSchema.pre('save', function(next) {
  const totalEVs = Object.values(this.target_evs).reduce((sum, ev) => sum + ev, 0);
  if (totalEVs > 510) {
    next(new Error('Total EVs cannot exceed 510'));
  } else {
    next();
  }
});

module.exports = mongoose.model('TrainingGuide', trainingGuideSchema);
