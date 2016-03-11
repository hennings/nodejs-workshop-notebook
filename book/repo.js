var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://192.168.99.100:27017/hsws';
// Use connect method to connect to the Server

var collectionPromise = MongoClient.connect(url).then(function (db) {
    return db.collection("books")
})

module.exports = {
    stockUp: function (isbn, count) {
        return collectionPromise.then(function (collection) {
            collection.updateOne({isbn: isbn}, {isbn :isbn, count: count}, {upsert: true})
        })
    }
    , findAll: function () {
        return collectionPromise.then(function (c) {
            return c.find({}).toArray()
        })
    }
    ,getCount: function (isbn) {
        return collectionPromise.then(function(c) {
            return c.find({"isbn": isbn}).limit(1).next();
        }).then(function(result) {
            if (result) { return result.count}
            return null;
        })
    }
}
