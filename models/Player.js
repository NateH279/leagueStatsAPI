const mongoose = require('mongoose')

const playerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        default: 0
    },
    nationality: {
        type: String,
        required: true
    },
    position: [{
        type: String,
        required: true
    }],
    matchesPlayed: {
        type: Number,
        default: 0
    },
    minutesPlayed: {
        type: Number,
        default: 0
    },
    goals: {
        type: Number,
        default: 0
    },
    assists: {
        type: Number,
        default: 0
    },
    team: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team'
    }
})

module.exports = mongoose.model('Player', playerSchema)