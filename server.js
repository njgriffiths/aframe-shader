var port = 3000;
var express = require('express');

var app = express();

app.use(express.static('public'));

app.listen(port, function() {
	console.log('Express server is up on port ' + port);
});