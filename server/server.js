const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
// to clean up the path

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

// set up the middleware
app.use(express.static(publicPath));

// register an event listener
io.on('connection', (socket) => {
	console.log('New user connected');


	socket.on('createMessage', (message) => {
		console.log('createEmail', message);
		io.emit('newMessage', {		//emit to every user
			from: message.from,
			text: message.text,
			createdAt: new Date().getTime()
		});
	});

	socket.on('disconnect', () => {
		console.log('User was disconnected');
	});
});


server.listen(port, () => {
	console.log(`Server is up on port ${port}`);
});