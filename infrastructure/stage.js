

var _ = require('lodash');
var heroin = require('heroin-js');

var stage = {
    name: 'deep-powder-books-1337-stage',
    config_vars: {
        NODE_ENV: 'stage'
    }

};

var config = _.merge({}, require("./base"), stage);

var configurator = heroin(process.env.HEROKU_API_TOKEN, {debug:false});
configurator(config);


