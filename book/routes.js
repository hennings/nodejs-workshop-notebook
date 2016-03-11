module.exports = function (repo) {
    return {
        root: function (req, res) {
            res.send('Hello World!');
            console.log("served hello world")
        },
        stockUp: function (req, res, next) {
            repo.stockUp(req.body.isbn, req.body.count)
                .catch(next)
            res.json({isbn: req.body.isbn, count: req.body.count})
        },
        stockAvailable: function (req, res) {
            var isbn = req.params.isbn
            repo.getCount(isbn).then(function (count) {
                if (count == null) {
                    res.status(404).json({error: "book not found " + isbn})
                } else {
                    res.status(200).json({count: count})
                }
            })

        },
        dump: function (req, res) {
            repo.findAll().then(function (data) {
                res.json({data})
            })
        },
        feil: function (req, res) {
            throw "ull";
        }


    }

}