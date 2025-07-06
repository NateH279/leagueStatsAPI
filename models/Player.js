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
    nationality: {
        type: String,
        required: true
    },
    position: [{
        type: String,
        required: true
    }],
    team: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team'
    },
    born: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        default: 0
    },
    matchesPlayed: {
        type: Number,
        default: 0
    },
    starts: {
        type: Number,
        default: 0
    },
    minutesPlayed: {
        type: Number,
        default: 0
    },
    ninetiesPlayed: {
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
    goalContributions: {
        type: Number,
        default: 0
    },
    nonPenaltyGoals: {
        type: Number,
        default: 0
    },
    penaltyGoals: {
        type: Number,
        default: 0
    },
    attemptedPenaltyKicks: {
        type: Number,
        default: 0
    },
    yellowCards: {
        type: Number,
        default: 0
    },
    redCards: {
        type: Number,
        default: 0
    },
    expectedGoals: {
        type: Number,
        default: 0
    },
    nonPenaltyExpectedGoals: {
        type: Number,
        default: 0
    },
    expectedAssists: {
        type: Number,
        default: 0
    },
    nonPenaltyGoalsContributions: {
        type: Number,
        default: 0
    },
    progressiveCarries: {
        type: Number,
        default: 0
    },
    progressivePasses: {
        type: Number,
        default: 0
    },
    progressivePassesReceived: {
        type: Number,
        default: 0
    },
    goalsPer90: {
        type: Number,
        default: 0
    },
    assistsPer90: {
        type: Number,
        default: 0
    },
    goalContributionsPer90: {
        type: Number,
        default: 0
    },
    nonPenaltyGoalsPer90: {
        type: Number,
        default: 0
    },
    nonPenaltyGoalContributionsPer90: {
        type: Number,
        default: 0
    },
    expectedGoalsPer90: {
        type: Number,
        default: 0
    },
    expectedGoalContributionsPer90: {
        type: Number,
        default: 0
    },
    nonPenaltyExpectedGoalsPer90: {
        type: Number,
        default: 0
    },
    nonPenaltyExpectedGoalContributionsPer90: {
        type: Number,
        default: 0
    },
})

module.exports = mongoose.model('Player', playerSchema)