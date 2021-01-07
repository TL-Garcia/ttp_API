require('dotenv').config()
const mongoose = require('mongoose');
const DB_URI = process.env.DB_URI || 'mongodb://127.0.0.1:27017/ttp';
const { seedChords } = require('./chords.seeds');

mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(() => {
        console.info(`Connection stablished on ${DB_URI}`)
        mongoose.connection.db.dropDatabase().then(() => {
            console.info('Cleared database')
            
            seedChords()
                .then(() => {
                    console.log('Database seeded')
                    mongoose.connection.close()
                })
                .catch(e => console.error(e))
        })
    })
    .catch(e => console.error(e))