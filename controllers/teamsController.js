const Team = require('../models/Team')
const asyncHandler = require('express-async-handler')

// @desc Get all teams
// @route GET /teams
// @access Private
const getAllTeams = asyncHandler(async (req, res) => {
    const teams = await Team.find().select().lean()
    if (!teams?.length) {
        return res.status(400).json({ message: 'No teams found' })
    }
    res.json(teams)
})

// @desc Create new team
// @route POST /teams
// @access Private
const createNewTeam = asyncHandler(async (req, res) => {
    const { teamName, gamesPlayed, wins, draws, losses, goalsFor, goalsAgst, goalDiff, points } = req.body

    //Confirms data
    if (!teamName) {
        return res.status(400).json({ message: 'Team name required' })
    }

    // Checks for duplicate
    const duplicate = await Team.findOne({ teamName }).lean().exec()

    if (duplicate) {
        return res.status(409).json({ message: 'Duplicate team' })
    }

    const teamObject = {
        teamName, 
        gamesPlayed, 
        wins, 
        draws, 
        losses, 
        goalsFor, 
        goalsAgst, 
        goalDiff, 
        points
    }

    // Create and store new team
    const team = await Team.create(teamObject)

    if (team) { // Created
        res.status(201).json({ message: `New team ${teamName} created`})
    } else {
        res.status(400).json({ message: `Invalid team data entered`})
    }
})

// @desc Update a team
// @route PATCH /teams
// @access Private
const updateTeam = asyncHandler(async (req, res) => {
    const { id, teamName, gamesPlayed, wins, draws, losses, goalsFor, goalsAgst, goalDiff, points } = req.body

    //Confirms data
    if (!id || !teamName) {
        return res.status(400).json({ message: 'Team name and ID required' })
    }

    const team = await Team.findById(id).exec()

    if(!team) {
        return res.status(400).json({ message: 'Team not found' })
    }

    // Checks for duplicate
    const duplicate = await Team.findOne({ teamName }).lean().exec()

    if (duplicate && duplicate?._id.toString() !== id) {
        return res.status(409).json({ message: 'Duplicate team' })
    }

    team.teamName = teamName
    team.gamesPlayed = gamesPlayed
    team.wins = wins
    team.draws = draws
    team.losses = losses
    team.goalsFor = goalsFor
    team.goalsAgst = goalsAgst
    team.goalDiff = goalDiff
    team.points = points

    const updatedTeam = await team.save()

    res.json({ message: `${updatedTeam.teamName} updated`})
})

// @desc Delete a team
// @route DELETE /teams
// @access Private
const deleteTeam = asyncHandler(async (req, res) => {
    const { id } = req.body

    if(!id) {
        return res.status(400).json({ message: 'Team ID required' })
    }

    const team = await Team.findById(id).exec()

    if (!team) {
        return res.status(400).json({ message : 'Team not found'})
    }

    const result = await team.deleteOne()

    const reply = `ID: ${result.id} Name: ${result.teamName} DELETED`

    res.json(reply)
})

module.exports = {
    getAllTeams,
    createNewTeam,
    updateTeam,
    deleteTeam
}