//Babel ES6/JSX Compiler
require('babel-register');
var _ = require('underscore');
var React = require('react');
var ReactDOM = require('react-dom/server');
var Router = require('react-router');
var path = require('path');
var bodyParser = require('body-parser');
var express = require('express');
var async = require('async');
var routes = require('./src/routes');
var swig  = require('swig');


//SERVER
var app = express();
app.set('port', 8080);

//EXPRESS MIDDLEWARES
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'html');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

//REACT MIDDLEWARES
app.use(function(req, res) {
  Router.match({ routes: routes.default, location: req.url }, function(err, redirectLocation, renderProps) {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirectLocation) {
      res.status(302).redirect(redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
        var html = ReactDOM.renderToStaticMarkup(React.createElement(Router.RouterContext, renderProps));
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
