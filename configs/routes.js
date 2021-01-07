const express = require('express')
const router = express.Router()

/*CONTROLLERS*/
const chordsController = require('../controllers/chords.controller')

/*ROUTES*/
router.get('/', (_, res) => res.send('API is up'))
router.get('/chords', chordsController.getChords)

module.exports = router