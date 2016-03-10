var express = require('express');
var app = express();

var logIt = function (a) {
    return function (req, res, next) {
        console.log(a + " incoming request logged at " + new Date())
        next();
    }
}

var auth = function (req, res, next) {
    console.log("auth")
    next();
}

app.use(logIt("first"));
app.use(auth);

app.get('/', logIt("second"), function (req, res) {
    res.send('Hello World!');
    console.log("served hello world")
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

