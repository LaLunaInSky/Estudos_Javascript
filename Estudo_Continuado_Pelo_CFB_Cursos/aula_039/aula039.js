"use strict"

const caixa1 = document.querySelector("#caixa1")
const cursos = ["HTML", "CSS", "Javascript", "PHP", "React", "MySQL", "React Native"]

cursos.map((elemento, indice)=>{
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id", `c${indice+1}`)
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerText = elemento
    caixa1.appendChild(novoElemento)
})

const btn_cursos = [...document.querySelectorAll(".curso")]

console.log(btn_cursos)
console.log(caixa1.lastElementChild)