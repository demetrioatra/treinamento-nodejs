const express = require('express')
var app = express()

//-------------------------------------------------------
// Configuração do EJS como engine
app.set('view engine', 'ejs')
// Configurando caminho dos arquivos estáticos
app.use(express.static('public'))

// Rotas
app.get('/:nome/:lang', (req, res) => {
    var nome = req.params.nome
    var lang = req.params.lang
    var titulo = 'Duvida sobre logica'
    exibirMsg = false

    var produtos = [
        {nome: "Doritos", preco: 10.5},
        {nome: "Coca-cola", preco: 14},
        {nome: "Chocolate", preco: 7.99}
    ]

    res.render('index', {
        nome: nome,
        lang:lang,
        titulo: titulo,
        avaliacoes: 9000,
        msg: exibirMsg,
        produtos: produtos
    })
})

//-------------------------------------------------------

app.listen(8080, () => {
    console.log('Servidor iniciado!')
})