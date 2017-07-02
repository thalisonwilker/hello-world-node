var http = require("http");
var fs = require("fs");


http.createServer(function(request, response){
	fs.readFile("./index.html", function(err, html){
		var html_string = html.toString();

		// 1 passo: regex que busca no html onde há { }
		var variaveis = html_string.match(/[^{\}]+(?=\})/g);
		var nome = "Thalison Wilker";

		//2 passo: varrer a variável que nos foi devolvida pela regex	
		for (var i = variaveis.length - 1; i >= 0; i--) {

			//3 passo: executamos como código Javascript
			//	 para obter o valor da variável
			var valor = eval(variaveis[i]);

			// substituir o valor entre {x} pelo seu conteúdo correspondente
			html_string = html_string.replace("{"+variaveis[i]+"}", valor);
		}
		// mandamos como resposta
		response.writeHeader(200,{"Content-Type":"text/html"});
		response.write(html_string);
		response.end();
	});

}).listen(8080, function(){
	console.log("servidor rodando");
});
