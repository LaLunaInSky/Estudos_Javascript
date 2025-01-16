"use strict"

const divArray = document.querySelector('#caixaArray>div')
const btnVerificar = document.querySelector('button')
const divResultado = document.querySelector('#caixaResultado>div')
const listaParaOArray = [21,25,13,20,16,18,22]

listaParaOArray.map((elemento, indice)=>{
    if (indice != 0) {
        divArray.innerText += ` > ${elemento}`
    } else {
        divArray.innerText = elemento
    }
})

btnVerificar.addEventListener("click", ()=>{
    let posiçãoNãoConforme
    const verificarDeConformidade = listaParaOArray.every((elemento, posição)=>{
        if (elemento >= 18) {
            return elemento
        } else {
            posiçãoNãoConforme = (posição + 1)
        }
    })

    if (verificarDeConformidade == false) {
        divResultado.innerText = `Array não conforme, posição inicial ${posiçãoNãoConforme}`
    } else {
        divResultado.innerHTML = "Array conforme"
    }
})