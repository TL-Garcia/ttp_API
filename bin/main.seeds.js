require('dotenv').config()
const mongoose = require('mongoose');
const DB_URI = process.env.DB_URI || 'mongodb://127.0.0.1:27017/ttp';
const Chord = require('../models/chord.model');

mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(() => {
        console.info(`Connection stablished on ${DB_URI}`)
        mongoose.connection.db.dropDatabase().then(() => {
            console.info('Cleared database')
            
            const cmaj = {
                name: 'C major',
                symbol: 'C', 
                notes: ['C', 'E', 'G']
            }

            Chord.create(cmaj)
                .then(() => {
                    console.log('chord created')
                    mongoose.connection.close()
                })
                .catch(e => console.error(e))
        })
    })
    .catch(e => console.error(e))