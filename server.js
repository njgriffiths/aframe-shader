const port = 3000;
const express = require('express');

const app = express();
	.use(express.static('public'));
	.listen(port, function() {
		console.log('Express server is up on port ' + port);
	});