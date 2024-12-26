"use strict"

const valorPadrão = 0
let valor = 0

function adicionar(novoValor) {
    valor += novoValor
}

function soma(n1=valorPadrão, n2=valorPadrão) {
    let res= n1 + n2
    return res
}

console.log(valor)

adicionar(10)
adicionar(5)

let resultadoSoma = soma(15, 2)
console.log(resultadoSoma)

console.log(valor)