const express = require('express')
const { validateProject } = require('../projects/projects-middleware')
const Actions = require('../actions/actions-model')
const Projects = require('./projects-model')

const router = express.Router()

router.get('/', (req, res, next) => {
    Projects.get()
        .then(found => {
            res.status(200).json(found)
        })
        .catch(next)
})
router.get('/:id/actions', validateProject, (req, res, next) => {
    Projects.getProjectActions(req.params.id)
        .then(found => {
            res.json(found)
        })
        .catch(next)
})
router.get('/:id', validateProject, (req, res, next) => {
    Projects.get(req.params.id)
        .then(found => {
            res.json(found)
        })
        .catch(next)
})
router.post('/', validateProject, (req, res, next) => {
    const newProject = req.body
    if (!newProject.name || !newProject.description) {
        res.status(400).json({
            message: 'New projects require a name and description'
        })
    } else {
        Projects.insert(newProject)
            .then(found => {
                res.json(found)
            })
            .catch(next)
    }
})
router.put('/:id', (req, res, next) => {
    const updatedProject = req.body
    if (!updatedProject.name || !updatedProject.description || typeof updatedProject.completed !== "boolean") {
        res.status(400).json({
            message: 'Updated projects require a name, description, and completed'
        })
    } else {
        Projects.update(req.params.id, updatedProject)
            .then(found => {
                res.json(found)
            })
            .catch(next)
    }
})
router.delete('/:id', validateProject, (req, res, next) => {
    Projects.remove(req.params.id)
        .then(found => {
            res.json(found)
        })
        .catch(next)
})

module.exports = router