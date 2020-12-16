const mongoose = require('mongoose');
const DB_URI = process.env.DB_URI || 'mongodb://localhost:27017';

mongoose
	.connect(DB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: true,
	})
	.then(() => console.info(`Database running on ${DB_URI}`))
	.catch(e => console.error('Database connection unsuccesfull', e));

process.on('SIGINT', () => {
	mongoose.connection.close(() => {
		console.info('Closing database on app termination');
		process.exit(0);
	});
});
