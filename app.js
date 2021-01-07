/*IMPORTS*/
require('dotenv').config()
require('./configs/db.config')
const express = require('express')
const app = express()
const logger = require('morgan')

/*MIDDLEWARE*/
app.use(express.json())

/*ROUTING*/
const router = require('./configs/routes')
app.use('/', router)
app.use(logger('dev'))

const port = parseInt(process.env.PORT, 10)
app.listen(port, () => {
	console.info(`TTP API running on port ${port}`)
})