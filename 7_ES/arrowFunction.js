



// FUNCTION NORMAL
function func1(a, b) {
    console.log('NORMAL: ' + a, b)
}

// ARROW FUNCTION
// Utilização: 
// Com callbacks ( ex.: .then(() => {...}) )
// Ou definindo uma variável com a arrow function

var mult3 = (a, b, c) => {
    return a * b * c
}

var x2 = a => a * 2

// ---------------------------------

func1('oi', 1)
console.log('ARROW: ' + mult3(2,3,4))
console.log('1param 1linha s/ ret: ' + x2(2))