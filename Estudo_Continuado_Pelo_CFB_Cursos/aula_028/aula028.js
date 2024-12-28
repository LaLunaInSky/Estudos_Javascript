"use strict"

const converterInt = (elemento) => parseInt(elemento)
const dobrarNúmero = (elemento) => elemento*2

let números = ['1', '3', '4', '5']
console.log(números)
números = números.map(converterInt)
console.log(números)
números = números.map(dobrarNúmero)
console.log(números)

// const elementos = document.querySelectorAll('div')
// const valores = Array.prototype.map.call(elementos, ({innerText})=>innerText)
// console.log(valores)

// let elementos = document.querySelectorAll('div')
// elementos = [...elementos]
// elementos.map((elemento, indiceDoElemento) => {
//     console.log(elemento.innerText)
// }) 

// const cursos = ['html', 'css', 'javascript', 'php', 'react']
// let c = cursos.map((elemento, indiceDoElemento) => {
//     return `<div>${elemento}</div>`
// })
// console.log(c)