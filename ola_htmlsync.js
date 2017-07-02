var http = require("http");
var fs = require("fs");

var html = fs.readFileSync("./index.html");

http.createServer(function(request, response){

	response.write(html);
	response.end();

}).listen(8080, function(){
	console.log("servidor rodando");
});