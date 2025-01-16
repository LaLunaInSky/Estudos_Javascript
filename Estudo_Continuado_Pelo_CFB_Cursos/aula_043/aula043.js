"use strict"

const caixaCursosAdicionados = document.querySelector("#caixaCursosAdicionados")
const btnAddNovoCurso = document.querySelector("#btnAdicionarNovoCurso")
const btnRemoverCurso = document.querySelector("#btnRemoverCurso")
const btnCursoSelecionado = document.querySelector("#btnCursoSelecionado")
const inputNomeCurso = document.querySelector("#nomeCurso")
const cursosPréCriados = ["HTML", 'CSS', "Javascript", "PHP", "React", "MySQL", "ReactNative"]

const verificadorSelecinado = (elementoInformado)=>{
    [...document.querySelectorAll('.curso')].map((elemento)=>{
        if (elemento != elementoInformado) {
            if (elemento.classList.contains('selecionado')) {
            elemento.classList.remove('selecionado')
            }
        }
    })
}

const criarNovoCurso = (nomeCurso)=>{
    const nomeDoCurso = nomeCurso
    const caixaDeCursos = document.querySelector("#caixaCursosAdicionados")    
    
    const divCurso = document.createElement("div")
    divCurso.setAttribute("class", 'curso')
    divCurso.setAttribute("id", `c${caixaDeCursos.children.length + 1}`)
    divCurso.innerText = nomeCurso

    divCurso.addEventListener('click', (elemento)=>{
        elemento.target.classList.toggle('selecionado')
        verificadorSelecinado(elemento.target)
    })

    caixaDeCursos.appendChild(divCurso)
}

const realocamentoDeIDsCursos = ()=>{
    const todosCursos =  [...document.querySelectorAll(".curso")]
    todosCursos.map((elemento, indice)=>{
        elemento.removeAttribute('id')

        elemento.setAttribute("id", `c${indice+1}`)
    })
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
    const cursoSelecionado = document.querySelector('.selecionado')
    try {
        alert(`O curso selecionado é o ${cursoSelecionado.innerText}`)
    } catch(erro) {
        alert('NENHUM CURSO SELECIONADO!')
    }
})

btnRemoverCurso.addEventListener("click", ()=>{
    const cursoSelecionado = document.querySelector('.selecionado')
    try {
        cursoSelecionado.remove()
        realocamentoDeIDsCursos()
    } catch(erro) {
        alert('NENHUM CURSO SELECIONADO!')
    }
})