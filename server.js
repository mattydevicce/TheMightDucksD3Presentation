// Here we require Node.js libraries using CommonJS
var express = require('express');

var io = require('socket.io');
var path = require('path');
var app = express();

app.set('port', 3000);

app.use('/', express.static(path.join(__dirname,'public')));

app.listen(app.get('port'), function() {
	console.log('App listening on http://localhost:%s', app.get('port'));
});
