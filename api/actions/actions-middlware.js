// add middlewares here related to actions
function logger(req, res, next) {
    console.log(`[${new Date().toLocaleString()}] ${req.method} tp ${req.originalUrl}`)
    next()
}

module.exports = {
    logger
}