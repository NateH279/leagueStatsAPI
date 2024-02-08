const mongoose = require('mongoose')

const teamSchema = new mongoose.Schema({
    teamName: {
        type: String,
        required: true
    },
    city: {
        type: String,
        require: false
    },
    stadium: {
        type: String,
        require: false
    },
    yearFounded: {
        type: Number,
        require: false
    },
    logoURL: {
        type: String,
        require: false
    }
})

module.exports = mongoose.model('Team', teamSchema)