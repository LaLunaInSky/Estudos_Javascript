"use strict"

const divArray = document.querySelector('#caixaArray>div')
const btnReduzir = document.querySelector('button')
const divResultado = document.querySelector('#caixaResultado>div')
const listaParaOArray = [1,2,3,4,5]
let aux = []

listaParaOArray.map((elemento, indice)=>{
    if (indice != 0) {
        divArray.innerText += ` > ${elemento}`
    } else {
        divArray.innerText = elemento
    }
})

btnReduzir.addEventListener("click", ()=>{
    divResultado.innerText = listaParaOArray.reduce((anterior, elemento)=>{
        return anterior+elemento
    })
})