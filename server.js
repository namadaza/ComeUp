//Babel ES6/JSX Compiler
require('babel-register');
var async = require('async');
var bodyParser = require('body-parser');
var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var React = require('react');
var ReactDOM = require('react-dom/server');
var Router = require('react-router');
var routes = require('./src/routes');
var swig  = require('swig');
var _ = require('underscore');

//DB
var config = require('./db/config');
var Artist = require('./db/Artist.model');
mongoose.Promise = global.Promise; //mongoose deprecated default promise library
mongoose.connect(config.database);
mongoose.connection.on('error', () => {
  console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?');
})

//SERVER
var app = express();
app.set('port', process.env.PORT || 3000);

//EXPRESS MIDDLEWARES
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'html');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

//AJAX API ROUTES
/* GET /api/featured/resources:artist
 * returns the resources for a particular artist
 */
 app.get('/api/resources/featured', function(req, res, next) {
  var artist;
  var params = req.query;

  _.each(params, function(value, key) {
    if (key == "artist") {
      artist = value;
    }
  });

  Artist
    .find({ artist: artist, featured: true })
    .exec(function(err, resources) {
      if (err) return next(err);

      res.send(resources);
    });
});

//REACT MIDDLEWARES
app.use(function(req, res) {
  Router.match({ routes: routes.default, location: req.url }, function(err, redirectLocation, renderProps) {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirectLocation) {
      res.status(302).redirect(redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
        var html = ReactDOM.renderToString(React.createElement(Router.RouterContext, renderProps));
        var page = swig.renderFile('views/index.html', { html: html });
        res.status(200).send(page);
    } else {
      res.status(404).send('Page Not Found')
    }
  });
});

//SERVER INSANTIATION
var server = require('http').createServer(app);

server.listen(app.get('port'), function() {
  console.log('ComeUp Express server listening on port: ' + app.get('port'));
});
