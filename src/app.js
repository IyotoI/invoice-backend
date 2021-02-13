const morgan = require('morgan')
const express = require('express')
const app = express()
const cors = require('cors')

app.use(morgan('dev'))

app.set('port', process.env.PORT || 8080)

app.use(express.json())

app.use(cors())

app.use('/api/bills',require('./routes/bills.routes'))

module.exports = app