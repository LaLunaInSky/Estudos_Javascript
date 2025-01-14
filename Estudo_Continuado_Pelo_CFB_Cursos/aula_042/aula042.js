"use strict"

const caixaCursosAdicionados = document.querySelector("#caixaCursosAdicionados")
const btnAddNovoCurso = document.querySelector("#btnAdicionarNovoCurso")
const btnCursoSelecionado = document.querySelector("#btnCursoSelecionado")
const inputNomeCurso = document.querySelector("#nomeCurso")

const cursosPréCriados = ["HTML", 'CSS', "Javascript", "PHP", "React", "MySQL", "ReactNative"]

const criarNovoCurso = (nomeCurso)=>{
    const nomeDoCurso = nomeCurso
    const caixaDeCursos = document.querySelector("#caixaCursosAdicionados")    
    
    const divCurso = document.createElement("div")
    divCurso.setAttribute("class", 'curso')
    divCurso.setAttribute("id", `c${caixaDeCursos.children.length + 1}`)

    const labelCurso = document.createElement("label")
    labelCurso.setAttribute('for', `cursoC${caixaDeCursos.children.length + 1}`)
    labelCurso.innerHTML = nomeDoCurso

    const inputRadioCurso = document.createElement("input")
    inputRadioCurso.setAttribute('type', 'radio')
    inputRadioCurso.setAttribute('name', 'cursos')
    inputRadioCurso.setAttribute('id', `cursoC${caixaDeCursos.children.length + 1}`)

    divCurso.appendChild(labelCurso)
    divCurso.appendChild(inputRadioCurso)
    caixaDeCursos.appendChild(divCurso)
}

cursosPréCriados.map((elemento)=>{
    criarNovoCurso(elemento)
})

btnAddNovoCurso.addEventListener('click', ()=>{
    if (inputNomeCurso.value != '') {
        criarNovoCurso(inputNomeCurso.value)
    }
    
    inputNomeCurso.value = ''
})

btnCursoSelecionado.addEventListener("click", ()=>{
    const cursosAdicionados = [...document.querySelectorAll(".curso")].filter((valores)=>{
        if (valores.children[1].checked == true) {
            alert('O curso selecionado é o '+ valores.children[0].innerText)
        }
    })
})