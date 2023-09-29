const mongoose = require('mongoose')

const teamSchema = new mongoose.Schema({
    teamName: {
        type: String,
        required: true
    },
    gamesPlayed: {
        type: Number,
        default: 0
    },
    wins: {
        type: Number,
        default: 0
    },
    draws: {
        type: Number,
        default: 0
    },
    losses: {
        type: Number,
        default: 0
    },
    goalsFor: {
        type: Number,
        default: 0
    },
    goalsAgst: {
        type: Number,
        default: 0
    },
    goalDiff: {
        type: Number,
        default: 0
    },
    points: {
        type: Number,
        default: 0
    },
    
})

module.exports = mongoose.model('Team', teamSchema)