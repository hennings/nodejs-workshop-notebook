
module.exports = function(repo) {

    var express = require('express');
    var app = express();
    var bodyParser = require('body-parser');
    var assert = require("assert")
    var routes = require("./routes.js")(repo)
    var middleware = require("./middleware.js")


    app.use(middleware.auth);

    app.use(bodyParser.json())


    app.get('/', middleware.logIt("second"), routes.root);

    app.post('/stock', routes.stockUp)

    app.get('/stock/:isbn', routes.stockAvailable)


    app.get('/dump', routes.dump);

    app.get('/feil', middleware.logIt("second"),routes.feil);


    app.use(middleware.clientError)
    app.use(middleware.err);

    return app;

}