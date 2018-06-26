const path = require('path');
const express = require('express');
// to clean up the path

const publicPath = path.join(__dirname, '../public');

var app = express();

// set up the middleware
app.use(express.static(publicPath));

app.listen(3000, () => {
	console.log('Server is up on port 3000');
});