const mongoose = require('mongoose');

const customPokemonSchema = new mongoose.Schema({
  base_pokemon_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pokemon',
    required: true
  },
  nickname: {
    type: String,
    trim: true
  },
  level: {
    type: Number,
    required: true,
    min: 1,
    max: 100
  },
  ability: {
    type: String,
    required: true
  },
  moves: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Move',
    validate: {
      validator: function(moves = []) {
        return moves.length <= 4;
      },
      message: 'A Pokemon can only have up to 4 moves'
    }
  }],
  stats: {
    hp: { type: Number, required: true, min: 1 },
    attack: { type: Number, required: true, min: 1 },
    defense: { type: Number, required: true, min: 1 },
    special_attack: { type: Number, required: true, min: 1 },
    special_defense: { type: Number, required: true, min: 1 },
    speed: { type: Number, required: true, min: 1 }
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('CustomPokemon', customPokemonSchema);
