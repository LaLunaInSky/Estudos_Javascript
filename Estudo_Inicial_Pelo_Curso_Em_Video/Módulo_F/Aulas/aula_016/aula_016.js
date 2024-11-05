//função com paramentro e retorno
function parImpar(num) {
    if (num % 2 == 0) {
        return 'Par'
    } else {
        return 'Ímpar'
    }
}

function Soma(num1=0, num2=0){
    return num1 + num2
}

function Fatorial(num) {
    let numero = 1
    for (let c = num;c>0;c--) {
        numero = numero * c
    }
    return numero
}

console.log(Fatorial(6))

let v = function(x) {
    return x*2
}

console.log(v(10))

let dado = Soma(4)
console.log(dado)
console.log(parImpar(dado))