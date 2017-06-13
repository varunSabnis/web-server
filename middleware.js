var express = require('express');
var app = express();
var PORT = 3000;

app.listen(PORT,function(){
console.log('Server listening on port no. ' + PORT + '!');
});

var middleware = {
	requireAuthentication : function (req , res ,next) {
		console.log('private route hit');
		next();
	},

	logger : function(req,res,next) {
		console.log('Request : ' + req.method + ' ' + req.originalUrl);
		next();
	}
};



app.get('/',middleware.logger,function(req,res){
  res.send('Hello world!');
});
