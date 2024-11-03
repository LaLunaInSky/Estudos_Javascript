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

let v = function(x) {
    return x*2
}

console.log(v(10))

let dado = Soma(4)
console.log(dado)
console.log(parImpar(dado))