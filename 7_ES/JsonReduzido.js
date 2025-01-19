var end = 'Av. São João'
var numero = 1000
var compl = 'Apto. 123'
var endCompleto2 = {
    end2: 'XYZ',
    numero2: 100,
    compl2: ''
}

// ANTES
var endCompleto = {
    end: end,
    numero: numero,
    compl: compl,
    end2: endCompleto2.end2,
    numero2: endCompleto2.numero2,
    compl2: endCompleto2.compl2
}

// DEPOIS
var endCompleto2 = {
    end,
    numero,
    compl,
    // Operador Spread
    ...endCompleto2
}

// DESTRUCTURING
var { end, end2 } = endCompleto2

//-----------------------------------------------------

console.log(endCompleto, endCompleto2)
console.log(end, end2)