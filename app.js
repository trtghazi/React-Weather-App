var express = require('express');

// Create App
var app = express();

const PORT = process.env.PORT || 3000;

app.use(function(req, res, next){
	if(req.headers['x-forwarded-proto'] === 'http'){
		res.redirect('http://' + req.hostname + req.url);
	} else {
		next();
	}
});

app.use(express.static('public'));

app.listen(PORT, function(){
	console.log('Express is running on port' + PORT);
});
