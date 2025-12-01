const mongoose = require('mongoose');

const battleTeamSchema = new mongoose.Schema({
  name_of_team: {
    type: String,
    required: true,
    trim: true
  },
  pokemon: [{
    pokemon_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Pokemon',
      required: true
    },
    nickname: String,
    level: {
      type: Number,
      min: 1,
      max: 100,
      default: 50
    }
  }],
  stats: {
    wins: { type: Number, default: 0 },
    losses: { type: Number, default: 0 },
    draws: { type: Number, default: 0 }
  },
  moves_chosen: [{
    pokemon_index: {
      type: Number,
      min: 0,
      max: 5
    },
    moves: {
      type: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Move'
      }],
      validate: {
        validator: function(moves) {
          return moves.length <= 4;
        },
        message: 'A Pokemon can only have up to 4 moves'
      }
    }
  }],
  notes: String
}, {
  timestamps: true
});

// Validate that a team has at most 6 Pokemon
battleTeamSchema.pre('save', function(next) {
  if (this.pokemon.length > 6) {
    return next(new Error('A team cannot have more than 6 Pokemon'));
  }
  
  // Validate that move indices match existing Pokemon
  for (const moveEntry of this.moves_chosen) {
    if (moveEntry.pokemon_index >= this.pokemon.length) {
      return next(new Error(`Invalid pokemon_index: ${moveEntry.pokemon_index}. Team only has ${this.pokemon.length} Pokemon.`));
    }
  }
  
  next();
});

module.exports = mongoose.model('BattleTeam', battleTeamSchema);
