"use strict"

const caixa1 = document.querySelector("#caixa1")
const cursos = ["HTML", "CSS", "Javascript", "PHP", "React", "MySQL", "React Native"]

cursos.map((elemento, indice)=>{
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id", `c${indice+1}`)
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerText = elemento
    
    const btn_lixeira = document.createElement('img')
    btn_lixeira.setAttribute("src", "./imagens/lixeira_icone_30px.png")
    btn_lixeira.addEventListener("click", (evento)=>{
        const parentEvento = evento.target.parentElement
        caixa1.removeChild(parentEvento)
    })
    
    novoElemento.appendChild(btn_lixeira)
    caixa1.appendChild(novoElemento)
})

const btn_cursos = [...document.querySelectorAll(".curso")]
