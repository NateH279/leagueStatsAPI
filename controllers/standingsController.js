const Standing = require('../models/Standing')
const asyncHandler = require('express-async-handler')
const { logEvents } = require('../middleware/logger')

// @desc Get all standings
// @route GET /standings
// @access Private
const getAllStandings = asyncHandler(async (req, res) => {
    const standings = await Standing.find().select().lean()
    if (!standings?.length) {
        return res.status(400).json({ message: 'No standings found' })
    }
    res.json(standings)
})

// @desc Create new standings
// @route POST /standings
// @access Private
const createNewStanding = asyncHandler(async (req, res) => {
    const { teamID, position, matchesPlayed, wins, draws, losses, goalsFor, goalsAgst, goalDiff, points } = req.body
    logEvents(`${JSON.stringify(req.body)}`, 'debug.log')
    //Confirms data
    if (!teamID) {
        return res.status(400).json({ message: 'TeamID required' })
    }

    // Checks for duplicate
    const duplicate = await Standing.findOne({ teamID }).lean().exec()

    if (duplicate) {
        return res.status(409).json({ message: 'Duplicate standing' })
    }

    const standingObject = {
        teamID,
        position,
        matchesPlayed,
        wins,
        draws,
        losses,
        goalsFor,
        goalsAgst,
        goalDiff,
        points
    }

    // Create and store new standing
    const standing = await Standing.create(standingObject)

    if (standing) { // Created
        res.status(201).json({ message: `New standing ${standing._id} created`})
    } else {
        res.status(400).json({ message: `Invalid standing data entered`})
    }
})

// @desc Update a standing
// @route PATCH /standing
// @access Private
const updateStanding = asyncHandler(async (req, res) => {
    const { teamID, position, matchesPlayed, wins, draws, losses, goalsFor, goalsAgst, goalDiff, points } = req.body

    //Confirms data
    if (!id || !teamID) {
        return res.status(400).json({ message: 'Standing and team ID required' })
    }

    const standing = await Standing.findById(id).exec()

    if(!standing) {
        return res.status(400).json({ message: 'Standing not found' })
    }

    // Checks for duplicate
    const duplicate = await Standing.findOne({ teamID }).lean().exec()

    if (duplicate && duplicate?._id.toString() !== id) {
        return res.status(409).json({ message: 'Duplicate standing' })
    } 

    standing.teamID = teamID
    standing.position = position
    standing.matchesPlayed = matchesPlayed
    standing.wins = wins
    standing.draws = draws
    standing.losses = losses
    standing.goalsFor = goalsFor
    standing.goalsAgst = goalsAgst
    standing.goalDiff = goalDiff
    standing.points = points

    const updatedStanding = await standing.save()

    res.json({ message: `Standing - ${updatedStanding._id}: updated`})
})

// @desc Delete a standing
// @route DELETE /standing
// @access Private
const deleteStanding = asyncHandler(async (req, res) => {
    const { id } = req.body

    if(!id) {
        return res.status(400).json({ message: 'Standing ID required' })
    }

    const standing = await Standing.findById(id).exec()

    if (!standing) {
        return res.status(400).json({ message : 'Standing not found'})
    }

    const result = await standing.deleteOne()

    const reply = `Standing ID: ${result.id} DELETED`

    res.json(reply)
})

module.exports = {
    getAllStandings,
    createNewStanding,
    updateStanding,
    deleteStanding
}