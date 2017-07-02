var http = require("http");
var PORT = 8080

var server = http.createServer(function(request, response){
	console.log("Nova requisição recebida");
	response.end("Bem vindo");
});

server.listen(PORT, function(){
	console.log("Servidor rodando na porta "+PORT);
});