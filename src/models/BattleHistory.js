const mongoose = require('mongoose');

const battleHistorySchema = new mongoose.Schema({
  battle_team_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'BattleTeam',
    required: true
  },
  battle_date: {
    type: Date,
    required: true
  },
  result: {
    type: String,
    required: true,
    enum: ['win', 'loss', 'draw']
  },
  notes: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('BattleHistory', battleHistorySchema);
