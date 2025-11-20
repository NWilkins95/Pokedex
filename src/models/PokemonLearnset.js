const mongoose = require('mongoose');

// Schema for tracking which moves each Pokemon can learn and at what level
const pokemonLearnsetSchema = new mongoose.Schema({
  pokemon_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pokemon',
    required: true,
    unique: true
  },
  pokemon_name: {
    type: String,
    required: true
  },
  learnset: [{
    move_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Move',
      required: true
    },
    move_name: String,
    learn_method: {
      type: String,
      enum: ['level-up', 'tm', 'hm', 'tutor', 'start'],
      required: true
    },
    level_learned: {
      type: Number,
      min: 1,
      max: 100
    },
    tm_hm_number: Number
  }]
}, {
  timestamps: true
});

// Make learnset read-only
pokemonLearnsetSchema.pre('save', function(next) {
  if (!this.isNew) {
    return next(new Error('Pokemon learnset data is read-only'));
  }
  next();
});

pokemonLearnsetSchema.pre('findOneAndUpdate', function(next) {
  next(new Error('Pokemon learnset data is read-only'));
});

module.exports = mongoose.model('PokemonLearnset', pokemonLearnsetSchema);
