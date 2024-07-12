// add middlewares here related to actions
const Actions = require('./actions-model')

async function validateAction(req, res, next) {
    const action = await Actions.get(req.params.id)
    if (!action) {
      res.status(404).json({
        message: 'action not found'
      })
    } else {
      console.log(action)
      req.action = action
      next()
    }
}

module.exports = {
    validateAction
}