//Babel ES6/JSX Compiler
require('babel-register');
var mongoose = require('mongoose');
var _ = require('underscore');

var config = require('./db/config');
var Artist = require('./db/Artist.model');
mongoose.Promise = global.Promise; //mongoose deprecated default promise library
mongoose.connect(config.database);
var db = mongoose.connection;
db.on('error', function() {
  console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?');
})

//Load artist JSON data
var youngthug = require('./db/youngthug.json');
var dram = require('./db/dram.json');
var anderson = require('./db/andersonpaak.json');
var wrapper = [ youngthug, dram, anderson ];
Artist.insertMany(wrapper, (err, docs) => {
  console.log("inserting");
  db.close();
})
