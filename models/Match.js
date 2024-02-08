const mongoose = require('mongoose')

const matchSchema = new mongoose.Schema({
    matchDate: {
        type: Date,
        required: true
    },
    matchWeekNumber: {
        type: Number,
        required: true
    },
    homeTeam: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team',
        required: true
    },
    awayTeam: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team',
        required: true
    },
    homeTeamGoals: {
        type: Number,
        default: 0
    },
    awayTeamGoals: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model('Match', matchSchema)