const express = require('express')
const router = express.Router()
const playersController = require('../controllers/playersController')

router.route('/')
    .get(playersController.getAllPlayers)

module.exports = router