

function soma(a, b=50) {
    console.log(a + b)
}

function sub(a, b, invert=false) {
    if (invert)
        console.log(b - a)
    else
        console.log(a - b)
}