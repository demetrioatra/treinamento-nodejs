var marca = 'Calculadora v1'

function soma(a, b) {    return a + b   }
function sub(a, b) {    return a - b    }
function mult(a, b) {    return a * b   }
function div(a, b) {    return a / b    }

function pot(a, b) {
    var res = a
    while (b>1) {
        res = res * a
        b -= 1
    } 
    return res
}

module.exports = {
    marca,
    soma,
    sub,
    mult,
    div,
    pot
}
