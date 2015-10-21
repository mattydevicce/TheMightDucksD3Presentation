// Here we require Node.js libraries using CommonJS
var express = require('express');
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var path = require('path');
app.use( express.static('public'));

var app = express();

server.listen(3000);
