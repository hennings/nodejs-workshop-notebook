

var _ = require('lodash');
var heroin = require('heroin-js');

var prod = {
    name: 'deep-powder-books-1337',
    config_vars: {
        NODE_ENV: 'production'
    }

};

var config = _.merge({}, require("./base"), prod);

var configurator = heroin(process.env.HEROKU_API_TOKEN, {debug:false});
configurator(config);


