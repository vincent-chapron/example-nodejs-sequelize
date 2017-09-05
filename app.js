const http = require('http')

const express = require('express')
const bodyParser = require('body-parser')

require('./sequelize')
const routes = require('./routes')

const app = express()
const server = http.createServer(app)

app.use(bodyParser.json());
app.use(express.static(`${__dirname}/public`))
app.use(routes)

server.listen(3000)
