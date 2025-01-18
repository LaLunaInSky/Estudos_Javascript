"use strict"

let cursos = ["HTML", "CSS", "Javascript"]
const caixa =document.querySelector('#caixa')
let cores = ["azul", "verde", "vermelho"]

cursos.push("C++")
cursos.unshift("Python")
//cursos.shift()

cursos.push(cores)

console.log(cursos)

cursos.map((elemento, posição)=>{
    const divCurso = document.createElement('div')
    divCurso.setAttribute('id', `curso${posição + 1}`)
    divCurso.setAttribute('class', 'curso')
    divCurso.innerText = elemento
    caixa.appendChild(divCurso)
})