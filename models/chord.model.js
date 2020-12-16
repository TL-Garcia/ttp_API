const mongoose = require('mongoose');

const chordSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		symbol: {
			type: String,
			required: true,
		},
		notes: {
			type: [String],
			required: true,
		},
		tensions: {
			type: [String],
			enum: ['7', '9', '11', '13'],
		},
		music: {
			type: String,
		},
	},
	{
		timestamps: true,
		toJSON: {
			transform: (document, toReturn) => {
				toReturn.id = document._id;
				delete toReturn.__v;
				delete toReturn.createdAt;
				delete toReturn.updatedAt;
				return toReturn;
			},
		},
	}
);

const Chord = mongoose.model('Chord', chordSchema);

module.exports = Chord;
