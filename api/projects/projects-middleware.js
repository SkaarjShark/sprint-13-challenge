// add middlewares here related to projects
const Projects = require('./projects-model')

function logger(req, res, next) {
    console.log(`[${new Date().toLocaleString()}] ${req.method} tp ${req.originalUrl}`)
    next()
}

async function validateProject(req, res, next) {
    // try {
      const project = await Projects.get(req.params.id)
      if (!project) {
        res.status(404).json({
          message: 'project not found'
        })
      } else {
        console.log(project)
        req.project = project
        next()
      }
    // } catch (err) {
    //   req.status(500).json({
    //     message: 'problem finding project'
    //   })
    // }
  }

module.exports = {
    logger,
    validateProject
}