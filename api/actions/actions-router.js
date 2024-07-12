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
})
router.put('/:id', validateAction, (req, res, next) => {

})
router.delete('/:id', validateAction, (req, res, next) => {
    Actions.remove(req.params.id)
        .then(found => {
            res.json(found)
        })
        .catch(next)
})

module.exports = router