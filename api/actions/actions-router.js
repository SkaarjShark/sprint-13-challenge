const express = require('express')
const { validateAction } = require('./actions-middlware')
const Actions = require('./actions-model')

const router = express.Router()

router.get('/', (req, res, next) => {
    Actions.get()
        .then(found => {
            res.status(200).json(found)
        })
        .catch(next)
})
router.get('/:id', validateAction, (req, res, next) => {
    Actions.get(req.params.id)
        .then(found => {
            res.json(found)
        })
        .catch(next)
})
router.post('/', validateAction, (req, res, next) => {
    console.log(req.body)
    const newAction = req.body
    if (!newAction.notes || !newAction.description || !newAction.project_id) {
        res.status(400).json({
            message: 'New actions require notes, description, and project_id'
        })
    } else {
        Actions.insert(newAction)
            .then(found => {
                res.json(found)
            })
            .catch(next)
    }
})
router.put('/:id', validateAction, (req, res, next) => {
    const updatedAction = req.body
    if (!updatedAction.notes || !updatedAction.description || !updatedAction.project_id || typeof updatedAction.completed !== 'boolean') {
        res.status(400).json({
            message: 'Updated actions require notes, description, project_id, and completed'
        })
    } else {
        Actions.update(req.params.id, updatedAction)
            .then(found => {
                res.json(found)
            })
            .catch(next)
    }
})
router.delete('/:id', validateAction, (req, res, next) => {
    Actions.remove(req.params.id)
        .then(found => {
            res.json(found)
        })
        .catch(next)
})

module.exports = router