"use strict"

const soma = (...valores) => {
    const somar = val => {
        let res = 0
        for (let num  of val) {
            res += num
        }
        return res
    }
    return somar(valores)
}

console.log(soma(10,5,2,3))