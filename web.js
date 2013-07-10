var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
	var fs = require('fs');
	var stuff = fs.readFileSync("index.html");
	var strstuff = stuff.toString();
	response.send(strstuff);
//  response.send('Hello World 2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
