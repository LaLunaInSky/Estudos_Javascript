"use strict"

const divArray = document.querySelector('#caixaArray>div')
const btnVerificar = document.querySelector('button')
const divResultado = document.querySelector('#caixaResultado>div')
const listaParaOArray = [16,12,10,17,15,13,11]

listaParaOArray.map((elemento, indice)=>{
    if (indice != 0) {
        divArray.innerText += ` > ${elemento}`
    } else {
        divArray.innerText = elemento
    }
})

btnVerificar.addEventListener("click", ()=>{
    let posiçãoNãoConforme
    const verificarDeConformidade = listaParaOArray.some((elemento, posição)=>{
        if (elemento >= 18) {
            posiçãoNãoConforme = (posição + 1)
            console.log(elemento)
            return elemento
        } else {
            console.log(elemento)
        }
    })

    if (verificarDeConformidade) {
        divResultado.innerText = `Array conforme, posição inicial ${posiçãoNãoConforme}`
    } else {
        divResultado.innerHTML = "Array não conforme"
    }
})