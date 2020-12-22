const Chord = require('../models/chord.model');

const majorTriads = [];

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
]

const cMajor = {
	name: 'C major',
	symbol: 'C',
	notes: ['C', 'E', 'G'],
};

const createMajTriad = (n, type) => {
    const chord = {
        name: `${NOTES[n][type]} major`,
        symbol: `${NOTES[n][type]}`,
        notes: [`NOTES[n][type]`],
    }
}

const findChordNotes = (n, chordFormula, type) => {
   if (n >= 12) {
       n -= 12
   }


}

const majChordFormula = () => {
    // [n, n + 4, n + 7]
}