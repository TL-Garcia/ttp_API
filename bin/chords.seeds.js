const Chord = require('../models/chord.model')

const NOTES = [
	{
		sharp: 'C',
		flat: 'C',
	},
	{
		sharp: 'C#',
		flat: 'Db',
	},
	{
		sharp: 'D',
		flat: 'D',
	},
	{
		sharp: 'D#',
		flat: 'Eb',
	},
	{
		sharp: 'E',
		flat: 'E',
	},
	{
		sharp: 'F',
		flat: 'F',
	},
	{
		sharp: 'F#',
		flat: 'Gb',
	},
	{
		sharp: 'G',
		flat: 'G',
	},
	{
		sharp: 'G#',
		flat: 'Ab',
	},
	{
		sharp: 'A',
		flat: 'A',
	},
	{
		sharp: 'A#',
		flat: 'Bb',
	},
	{
		sharp: 'B',
		flat: 'B',
	},
]

const CHORD_PROPERTIES = {
	major: {
		symbolPostfix: '',
		chordFormula: n => [n, n + 4, n + 7],
	},
	minor: {
		symbolPostfix: 'm',
		chordFormula: n => [n, n + 3, n + 7],
	},
	'major seventh': {
		symbolPostfix: 'maj7',
		chordFormula: n => [n, n + 4, n + 7, n + 11]
	},
}

const CHORD_SEQUENCE = {
	sharpsSequence: i => (i * 7) % 12,
	flatsSequence: i => (i * 5) % 12,
}

const getNoteName = (note, alteration) => {
	if (note >= 12) {
		note -= 12
	}

	const noteName = NOTES[note][alteration]
	return noteName
}

const getChord = (alteration, n, chordName) => {
	const { chordFormula, symbolPostfix } = CHORD_PROPERTIES[chordName]
	const noteNumbers = chordFormula(n)
	const notes = noteNumbers.map(note => getNoteName(note, alteration))
	const root = notes[0]

	const chord = {
		notes,
		symbol: `${root}${symbolPostfix}`,
		name: `${root} ${chordName}`,
	}

	return chord
}

const getAllChords = chordName => {
	const allChords = []

	for (let i = 1; i < 6; i++) {
		const {sharpsSequence, flatsSequence} = CHORD_SEQUENCE
		const nSharp = sharpsSequence(i)
		const nFlat = flatsSequence(i)

		const flatChord = getChord('flat', nFlat, chordName)
		const sharpChord = getChord('sharp', nSharp, chordName)

		allChords.push(flatChord)
		allChords.push(sharpChord)
	}

	return allChords
}

const majorTriads = getAllChords('major')
const minorTriads = getAllChords('minor')
const majorSevenths = getAllChords('major seventh')

console.log(majorTriads)
console.log(minorTriads)
console.log(majorSevenths)
