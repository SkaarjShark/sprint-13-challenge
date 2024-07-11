const express = require('express')
const { validateProject } = require('../actions/actions-middlware')
const Actions = require('../actions/actions-model')
const Projects = require('./projects-model')

const router = express.Router()

router.get('/', (req, res, next) => {
    console.log('get ran')
    Projects.get()
        .then(found => {
            res.json(found)
        })
        .catch(next)
})
router.get('/:id/actions', (req, res) => {

})
router.get('/:id', validateProject, (req, res, next) => {
    console.log('id ', id)
    console.log('req ', req)
    console.log('req.params.id ', req.params.id)
    Projects.get(req.params.id)
        .then(found => {
            res.json(found)
        })
        .catch(next)
})
router.post('/', (req, res) => {

})
router.put('/:id', (req, res) => {

})
router.delete('/:id', (req, res) => {

})

module.exports = router