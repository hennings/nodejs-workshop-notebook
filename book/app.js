var express = require('express');
var app = express();
var bodyParser = require('body-parser');

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

var err = function logErrors(err, req, res, next) {
//    console.error(err.stack);
    res.status(err.status || 500)
    res.json({message: err.messsage, stack: err.stack})
    console.error("This is an error! " +res.status)
}

var clientError = function (req, res, next) {
    err.status=404;
    next(err)
}

app.use(logIt("first"));
app.use(auth);

app.use(bodyParser.json())


app.get('/', logIt("second"), (req, res) => {
    res.send('Hello World!');
    console.log("served hello world")
});

app.post('/stock', (req,res) => {
    console.log("stock: ");
    console.log(req.body)
    res.contentType("application/json")
    res.json({isbn:req.body.isbn, count: req.body.count})
})

app.get('/feil', logIt("second"), (req, res) => {
    throw "ull";
});


app.use(clientError)
app.use(err);

module.exports=app