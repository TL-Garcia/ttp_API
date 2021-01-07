const Chord = require('../models/chord.model')
const chordConstructor = require('chord-constructor')
const { C_NOTE } = require('../constants/contants')

module.exports.seedChords = () => {
	const majorChords = chordConstructor.getChords(6, 'major', C_NOTE)
	return Chord.create(majorChords)
}