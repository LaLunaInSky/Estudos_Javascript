"use strict"

const funçãoAnônima = function(v1, v2) {return v1+v2}

const funçãoArrow = (v1,v2) => {return v1+v2}

const soma = (...valores) => {
    let res = 0
    for (let num of valores) {
        res+=num
    }
    return res
}

let nome = nomePessoa => console.log(`Olá, ${nomePessoa}!`)

let add = num => num+10

console.log(funçãoAnônima(10,5))
console.log(funçãoArrow(10,5))
console.log(soma(10,5,4))

nome('Joana')
console.log(add(2))