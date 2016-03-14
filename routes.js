module.exports = function (stockRepository) {

    return {
        stockUp: function (req, res, next) {
            var isbn = req.body.isbn;
            var count = req.body.count;

            stockRepository.
                stockUp(isbn, count).
                catch(next);

            res.json({isbn: isbn, count: count});
        },
        findAll: function (req, res, next) {
            stockRepository.findAll().
                then(function (docs) {
                    res.json(docs);
                }).
                catch(next);
        },
        root: function (req, res) {
            res.json({
                "home": new Date(),
                "1337": "42"
            })
        },
        getCount: function (req, res) {
            stockRepository.getCount(req.params.isbn).then(function (result) {
                if (result !== null) {

                    res.format({
                        'text/html': function () {
                            res.status(200).send(result > 0 ? result : "empty");
                        },
                        'application/json': function () {
                            res.status(200).json({count: result});
                        }
                    });
                } else {
                    res.status(404).json({error: 'No book with ISBN: ' + req.params.isbn});
                }
            });
        }
    };
};