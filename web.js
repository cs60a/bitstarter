var express = require('express');
var app = express();
var fs = require('fs');

app.use(express.logger());

app.get('/', function(request, response) {
	var k = fs.readFileSync('./index.html','utf8');
	response.send(k);

  //response.send('Hello Cruel World!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
