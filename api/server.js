const express = require('express');
const { logger } = require('./actions/actions-middlware')
const projectRouter = require('./projects/projects-router')


const server = express();
server.disable('x-powered-by')
server.use(express.json())
server.use(logger)

server.use('/api/projects/:id', projectRouter)

server.get('/', (req, res) => {
    res.send(`<h2>Web Sprint Challenge: Build a web api</h2>`)
})

// Configure your server here
// Build your actions router in /api/actions/actions-router.js
// Build your projects router in /api/projects/projects-router.js
// Do NOT `server.listen()` inside this file!

module.exports = server;
