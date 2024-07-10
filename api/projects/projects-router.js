const express = require('express')
const { validateProject } = require('../actions/actions-middlware')
const Actions = require('../actions/actions-model')
const Projects = require('./projects-model')

const router = express.Router()

router.get('/api/projects', (req, res, next) => {
    Projects.get()
        .then(found => {
            res.json(found)
        })
        .catch(next)
})
router.get('/api/projects/:id', validateProject, (req, res, next) => {
    console.log(req)
    res.json(req)
})
router.post('/api/projects', (req, res) => {

})
router.put('/api/projects/:id', (req, res) => {

})
router.delete('/api/projects/:id', (req, res) => {

})
router.get('/api/projects/:id/actions', (req, res) => {

})

module.exports = router