"use strict"

const divArray = document.querySelector('#caixaArray>div')
const caixaDePesquisa = document.querySelector('#pesquisa')
const btnPesquisar = document.querySelector('button')
const divResultado = document.querySelector('#caixaResultado>div')

const listaNúmericaParaOArray = [10,5,8,2,9,15,20]
//const listaTextualParaOArray = []

listaNúmericaParaOArray.map((elemento, indice)=>{
    if (indice != 0) {
        divArray.innerText += ` > ${elemento}`
    } else {
        divArray.innerText = elemento
    }
})

const procurarIndiceInformado = (indice)=>{
    let count = 0
    listaNúmericaParaOArray.find((elemento, posição)=>{
        if (elemento == indice){
            divResultado.innerText = `O ${elemento} foi encontado na posição ${posição+1}`
        } else {
            count ++
        }

        if (count == listaNúmericaParaOArray.length) {
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
})