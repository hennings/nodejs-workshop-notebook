var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var assert = require("assert")

var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://192.168.99.100:27017/hsws';
// Use connect method to connect to the Server

MongoClient.connect(url, function (err, mdb) {
    assert.equal(null, err);


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
        console.error("This is an error! " + res.status)
    }

    var clientError = function (req, res, next) {
        err.status = 404;
        next(err)
    }

    app.use(logIt("first"));
    app.use(auth);

    app.use(bodyParser.json())


    app.get('/', logIt("second"), (req, res) => {
        res.send('Hello World!');
        console.log("served hello world")
    });

    app.post('/stock', (req, res) => {
        console.log("stock: ");
        console.log(req.body)
        res.contentType("application/json")

        var collection = mdb.collection('books');
        collection.updateOne({"isbn": req.body.isbn}, {"isbn": req.body.isbn, "count": req.body.count},
            function (err, result) {
                console.log(err);
                assert.equal(err, null);
                console.log("success");
                console.log(result);
                res.json(result)
            })
    })

    app.get('/dump', (req, res)=> {
        mdb.collection('books')
            .find({})
            .toArray(function (err, docs) {
                res.json(docs);
            });
    })

    app.get('/feil', logIt("second"), (req, res) => {
        throw "ull";
    });


    app.use(clientError)
    app.use(err);

})

module.exports = app