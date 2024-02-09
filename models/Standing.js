const mongoose = require('mongoose')

const standingSchema = new mongoose.Schema({
    teamID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team',
        required: true
    },
    position: {
        type: Number,
        required: true
    },
    matchesPlayed: {
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

module.exports = mongoose.model('Standing', standingSchema)