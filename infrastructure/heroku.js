var heroin = require('heroin-js');

var configurator = heroin(process.env.HEROKU_API_TOKEN, {debug: false});

/*
configurator.export('deep-powder-books-1337').then(function(result) {
    console.log(result);
});
*/


/*
var prod = {
    name: 'deep-powder-books-1337',
    region: 'eu',
    maintenance: false,
    stack: 'cedar-14',
    config_vars: {
        NODE_ENV: 'production'
    },
    log_drains: ['syslog://data.logentries.com:13636'],
    addons: {mongolab: {plan: 'mongolab:sandbox'}},
    collaborators: ['henning@spjelkavik.net', 'sebastian.verheughe@finn.no', 'siri@spjelkavik.net'],
    features: {
        'runtime-dyno-metadata': {enabled: false},
        'log-runtime-metrics': {enabled: true},
        'http-session-affinity': {enabled: false},
        preboot: {enabled: false},
        'http-shard-header': {enabled: false},
        'http-end-to-end-continue': {enabled: false}
    },
    formation: [{process: 'web', quantity: 1, size: 'Free'}],

};

configurator(prod);


var stage = {
    name: 'deep-powder-books-1337-stage',
    region: 'eu',
    maintenance: false,
    stack: 'cedar-14',
    addons: {mongolab: {plan: 'mongolab:sandbox'}},
    collaborators: ['henning@spjelkavik.net', 'sebastian.verheughe@finn.no', 'siri@spjelkavik.net'],
    config_vars: {
        NODE_ENV: 'test'
    },
    features: {
        'runtime-dyno-metadata': {enabled: false},
        'log-runtime-metrics': {enabled: true},
        'http-session-affinity': {enabled: false},
        preboot: {enabled: false},
        'http-shard-header': {enabled: false},
        'http-end-to-end-continue': {enabled: false}
    },
    formation: [{process: 'web', quantity: 1, size: 'Free'}],
    log_drains: [],
};

configurator(stage);

// Not in use anymore

*/