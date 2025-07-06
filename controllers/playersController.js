const Player = require('../models/Player')
const asyncHandler = require('express-async-handler')
const { logEvents } = require('../middleware/logger')

// @desc Get all standings
// @route GET /standings
// @access Private
const getAllPlayers = asyncHandler(async (req, res) => {
    logEvents(`${JSON.stringify('Request for all players')}`, 'debug.log')
    const players = await Player.find().select().lean()
    if (!players?.length) {
        return res.status(400).json({ message: 'No players found' })
    }
    res.json(players)
})

module.exports = {
    getAllPlayers
}