module.exports = {

    clientError: function (req, res, next) {
        err.status = 404;
        next(err)
    },
    err: function (err, req, res, next) {
        res.status(err.status || 500)
        res.json({message: err.messsage, stack: err.stack})
        console.error("This is an error! " + res.status)
    },
    logIt: function (a) {
        return function (req, res, next) {
            console.log(a + " incoming request logged at " + new Date())
            next();
        }
    },
    auth: function (req, res, next) {
        console.log("auth")
        next();
    }
}
