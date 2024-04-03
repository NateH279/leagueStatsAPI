const express = require('express')
const router = express.Router()
const teamsController = require('../controllers/teamsController')

router.route('/')
    .get(teamsController.getAllTeams)
    .post(teamsController.createNewTeam)
    .patch(teamsController.updateTeam)
    .delete(teamsController.deleteTeam)

router.get('/:id', teamsController.getTeamById)

module.exports = router