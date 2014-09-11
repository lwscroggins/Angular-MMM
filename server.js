'use strict'

var express = require('express');
//var bodyparser = require('bodyparser');
var mongoose = require('mongoose');
var http = require('http');
var app = express();

app.use(express.static(__dirname + (process.env.STATIC_DIR || '/build')));

//app.use(bodyparser.json());

var server = http.createServer(app);

server.listen(process.env.PORT || 3000, function () {
  console.log('server is running on port 3000');
});
