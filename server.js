var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
app.listen(PORT);
app.get('/', function(req,res){
	res.send('Hello machas!');
});
