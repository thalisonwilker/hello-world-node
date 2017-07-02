var http = require("http");
var fs = require("fs");


http.createServer(function(request, response){
	fs.readFile("./index.html", function(err, html){
		response.write(html);
		response.end();
	});

}).listen(8080, function(){
	console.log("servidor rodando");
});
