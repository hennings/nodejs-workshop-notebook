var request = require("supertest")
var assert = require("assert")
var app = require("../app.js")

describe("Book inventor", function () {
    it("allows to stock up the items", function (done) {
        request(app)
            .post("/stock")
            .send({
                "isbn": "12345",
                "count": 10
            }).set("Content-Type", "application/json")
            .expect("Content-Type", /json/)
            .expect(200)
            .end(function (err, res) {
                    if (err) return done(err);
                    assert.equal(res.body.isbn, "12345")
                    done();
                }
            )
    })
})
