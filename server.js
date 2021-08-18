var express = require('express');
var app = express();
var app_port = 80;

app.listen(app_port, function(){
	console.log('Server is running on port ' + app_port + '.');
});

app.get('/',getHomePage);
app.get('/listing',getListingPage);

function getHomePage(req, res){

	var spawn = require('child_process').spawn;
	var process = spawn('php',["./home.php"]);
	process.stdout.on('data',function(data){
		res.send(data.toString());
	});

}

function getListingPage(req, res){

	var spawn = require('child_process').spawn;
	var process = spawn('php',["./listing.php", req.query.type]);
	process.stdout.on('data',function(data){
		res.send(data.toString());
	});
}

