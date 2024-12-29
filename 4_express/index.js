const express = require('express')
const app = express()

//-----------------------------------------------------------------------------

// Rota da página principal
app.get('/', function(req, res) {
    res.send(
        "<h1>Bem vindo</h1>" +
        "<h2>Stacks:</h2>" +
        "<p>JavaScript</p>" +
        "<p>Node.js</p>" +
        "<p>npm</p>" +
        "<p>Express</p>" +
        "<p>Nodemon</p>" +
        "<p>HTML</p>"
    )
})

// Rota com parâmetro obrigatório
app.get('/usuario/:nome', function(req, res) {
    res.send(
        "Página de usuário " + req.params.nome
    )
})

// Rota com parâmetro opcional
app.get('/artigo/:nome?', function(req, res) {
    var artigo = req.params.nome
    if(artigo) {
        res.send("<h1>Artigo: </h1>" + artigo)
    } else {
        res.send(
            res.send("<h1>Não existe artigo ou está bloqueado</h1>")
        )
    }
})

// Rota com query params (completamente opcional)
// ex.: /video/?id=10
app.get('/video', function(req, res) {
    var id = req.query['id']
    if(id) {
        res.send(       res.send("Video " + id)     )
    } else {
        res.send(       res.send("<h1>Não existe vídeo ou está bloqueado</h1>")     )
    }
})

//-----------------------------------------------------------------------------

// Criando servidor
app.listen(8080, function(erro) {
    if (erro) {
        console.log("Ocorreu um erro...")
    } else {
        console.log("Servidor iniciado com sucesso!")
    }
})