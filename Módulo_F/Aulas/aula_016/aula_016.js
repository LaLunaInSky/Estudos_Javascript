//função com paramentro e retorno
function parImpar(num) {
    if (num % 2 == 0) {
        return 'Par'
    } else {
        return 'Ímpar'
    }
}

let dado = parImpar(5)
console.log(dado)