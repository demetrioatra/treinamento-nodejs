// variáveis
var http = require("http")

// criação do servidor na porta 8080
http.createServer(function(req, res){
    res.end(
        "<h1>Bem vindo</h1>" +
        "<h4>Site feito com javascript e node.js</h4>"
    )
}).listen(8080)
console.log('Servidor rodando')