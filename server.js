// Here we require Node.js libraries using CommonJS
var express = require('express');
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var app = express();

app.use( express.static('public'));

server.listen(3000);