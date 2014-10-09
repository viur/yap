// load the Event model
var Event = require('./models/event');

module.exports = function (app, debug) {


    app.get('/api/events', function (req, res) {

        debug('hello');

    });

};