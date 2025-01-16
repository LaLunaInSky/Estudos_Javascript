"use strict"

const divArray = document.querySelector('#caixaArray>div')
const caixaDePesquisa = document.querySelector('#pesquisa')
const btnPesquisar = document.querySelector('button')
const divResultado = document.querySelector('#caixaResultado>div')

const listaParaOArray = ['HTML', 'CSS', 'Javascript']


listaParaOArray.map((elemento, indice)=>{
    if (indice != 0) {
        divArray.innerText += ` > ${elemento}`
    } else {
        divArray.innerText = elemento
    }
})

const procurarIndiceInformado = (indice)=>{
    let count = 0
    listaParaOArray.find((elemento, posição)=>{
        if (typeof(elemento) == 'string') {
            elemento.toLowerCase()
        }

        if (typeof(indice) == 'string') {
            indice.toLowerCase()
        }
        
        if (elemento == indice){
            divResultado.innerText = `${elemento} foi encontado na posição ${posição+1}`
        } else {
            count ++
        }

        if (count == listaParaOArray.length) {
            divResultado.innerText = `Nenhum ${indice} foi encontrado!`
        }
    })
}

btnPesquisar.addEventListener("click", ()=>{
    if (caixaDePesquisa.value != "") {
        procurarIndiceInformado(caixaDePesquisa.value)
    } else {
        alert("Digite algo para pesquisar!!!")
    }

    caixaDePesquisa.value = ""
    caixaDePesquisa.focus()
})