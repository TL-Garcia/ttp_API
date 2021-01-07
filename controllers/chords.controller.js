const { seedChords } = require('../bin/chords.seeds')
const Chord = require('../models/chord.model')

module.exports.getChords = (req, res, next) => {
    const query = req.query || {}

    Chord.find({})
        .then(chords => {
            res.json(chords)
        })
        .catch(e => console.error(e))
}