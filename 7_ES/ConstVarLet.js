// Const - Constante 
// Sóó pode ser definido uma vez
const apelido = 'Dema'

// Var - Variável
// Pode ser definido varias vezes
// Escopos: Global, Local
var idade = 20

idade = 25

// Let - Diferença do Var está no escopo
// Escopos: Global, Local, Bloco

// Global
var nome = 'Demétrio' 
let a = 10
let testar = true

// Vai funcionar
function func1 () {
    var sobrenome = 'Atra' // Local
    console.log('VAR - Global e Local: ' + nome + ' ' + sobrenome)
}

// Não vai funcionar
function func2 () {
    //console.log('VAR - GLOBAL e LOCAL: ' + nome + ' ' + sobrenome)
}



console.log('CONST: ' + apelido)

func1() 
func2()

// Vai funcionar
if (testar) {
    let b = 5
    console.log('LET - GLOBAL e BLOCO: ' + a + b)
}

// Não vai funcionar
//console.log(a + b)