// set up ========================
var express = require('express'); // create our app w/ express
var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);

var mongoose = require('mongoose'); 					// mongoose for mongodb
var logger = require('morgan'); 			// log requests to the console (express4)
var bodyParser = require('body-parser'); 	// pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var favicon = require('serve-favicon');

// configuration =================

// load the config
var database = require('./config/database');

mongoose.connect(database.url); 	// connect to mongoDB database on modulus.io

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(express.static(__dirname + '/public')); 				// set the static files location /public/img will be /img for users
app.use(logger('dev')); 										// log every request to the console
app.use(bodyParser.urlencoded({'extended': 'true'})); 			// parse application/x-www-form-urlencoded
app.use(bodyParser.json()); 									// parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

var debug = require('debug')('yap');

// routes ======================
require('./app/routes')(app, debug);
require('./app/io')(io);

// listen (start app with node server.js) ======================================
var server = http.listen(8080, function () {
    debug('Express server listening on port ' + server.address().port);
});
