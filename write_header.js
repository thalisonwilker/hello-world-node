var http = require("http");
var fs = require("fs");

http.createServer(function(request, response){
		console.log("ola :)");
		response.writeHeader(200, {"Content-Type":"application/json"});
		response.write(JSON.stringify({nome:"thalison", email:"thalison.wilker@gmail.com"}));
		response.end(""); 

	}).listen(8000, function(){
		console.log("Servidor rodando no endereço localhost:8000");
});