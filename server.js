// Here we require Node.js libraries using CommonJS
var express = require('express');
var path = require('path');
var app = express();

app.set('port', 3000);


app.use('/', express.static(path.join(__dirname,'public')));

var server = app.listen(app.get('port'), function() {
	console.log('App listening on http://localhost:%s', app.get('port'));
});

app.get('/matt', function(req, res){
	res.sendFile(path.join(__dirname + '/public/matt.html'));
})

var io = require('socket.io')(server);

var birthday_months = [0,0,0,0,0,0,0,0,0,0,0,0]
io.on('connection', function(socket) {
	console.log("INCOMMING CONNECTION")
	socket.emit('connection', {data: birthday_months})

	socket.on("incomming-month", function(month) {
		birthday_months[month.month] += 1
		io.emit('updated-months', {month: month.month})
	})
})