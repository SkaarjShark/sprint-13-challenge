const express = require('express');
const { logger } = require('./projects/projects-middleware')
const projectRouter = require('./projects/projects-router')
const actionRouter = require('./actions/actions-router');

const server = express();
server.disable('x-powered-by')
server.use(express.json())
server.use(logger)

server.use('/api/projects', projectRouter)
server.use('/api/actions', actionRouter)

server.get('*', (req, res) => {
    res.send(`<h2>Web Sprint Challenge: Build a web api</h2>`)
})

// Configure your server here
// Build your actions router in /api/actions/actions-router.js
// Build your projects router in /api/projects/projects-router.js
// Do NOT `server.listen()` inside this file!

module.exports = server;
