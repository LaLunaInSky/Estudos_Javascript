"use strict"

let valores = [2,3,4,5]
const operações = [
    (...val)=>{
        let soma = 0
        val.map((elemento)=>{
            soma+=elemento
        })
        return soma
    },
    (...val)=>{
        let multiplicação = 1
        val.map((elemento)=>{
            multiplicação*=elemento
        })
        return multiplicação
    },
    (...val)=>{
        val.map((elemento)=>{
            console.log(elemento)
        })
    }
]

const operaçõesObj = {
    Soma: (...val)=>{
        let soma = 0
        val.map((elemento)=>{
            soma+=elemento
        })
        return soma
    },
    Multiplicação: (...val)=>{
        let multiplicação = 1
        val.map((elemento)=>{
            multiplicação*=elemento
        })
        return multiplicação
    },
    Printar: (...val)=>{
        val.map((elemento)=>{
            console.log(elemento)
        })
    }
}

console.log(operações[0](...valores))
console.log(operações[0](5,6,7)+"\n")

console.log(operações[1](...valores))
console.log(operações[1](10,5)+"\n")

operações[2](...valores)

console.log('\n'+ operaçõesObj.Soma(...valores))

console.log('\n'+ operaçõesObj.Multiplicação(...valores)+"\n")

operaçõesObj.Printar(...valores)