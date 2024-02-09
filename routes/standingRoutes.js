const express = require('express')
const router = express.Router()
const standingsController = require('../controllers/standingsController')

router.route('/')
    .get(standingsController.getAllStandings)
    .post(standingsController.createNewStanding)
    .patch(standingsController.updateStanding)
    .delete(standingsController.deleteStanding)

module.exports = router