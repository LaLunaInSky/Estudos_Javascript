"use strict"


const elementosCursos = [...document.querySelectorAll('.curso')]

const btnclicado = (evento)=>{
    elementosCursos.map((e) => {
        e.classList.remove('destaque')
    })

    const elemetoClicado = evento.target
    elemetoClicado.classList.add('destaque')

}

elementosCursos.map((e)=>{
    e.addEventListener('click', btnclicado)
})