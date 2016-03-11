var MongoClient = require('mongodb').MongoClient;
var url = process.env.MONGOLAB_URI || 'mongodb://192.168.99.100:27017/books_inventory_db';

console.log("Mongourl: " + url);

var collectionPromise = MongoClient.
    connect(url).
    then(function (db) {
        return db.collection('books');
    });


module.exports = {
    stockUp: function (isbn, count) {
        return collectionPromise.
            then(function (collection) {
                collection.updateOne({isbn: isbn}, {
                    isbn: isbn,
                    count: count
                }, {upsert: true});
            });
    },
    findAll: function () {
        return collectionPromise.
            then(function (collection) {
                return collection.
                    find({}).
                    toArray();
            });
    },
    getCount: function (isbn) {
        return collectionPromise.then(function (collection) {
            return collection.find({"isbn": isbn}).limit(1).next();
        }).then(function (result) {
            if (result) {
                return result.count;
            }
            return null;
        });
    }
};
