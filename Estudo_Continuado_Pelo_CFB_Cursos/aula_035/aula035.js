"use strict"

const caixa1 = document.querySelector('#caixa1')
const caixa2 = document.querySelector('#caixa2')
const btnCopiar = document.querySelector('#btn_copiar')
const btnReverter = document.querySelector('#btn_reverter')
const cursosTodos = [...document.querySelectorAll('.curso')]

cursosTodos.map((e) => {
    e.addEventListener('click', () => {
        if (e.parentElement == caixa1) {   
            e.classList.toggle('destaque')
        }
    })
})

btnCopiar.addEventListener('click', ()=> {
    cursosTodos.map((e) => {
        if (e.classList.contains('destaque')) {
            e.classList.remove('destaque')
            caixa2.appendChild(e)
        }
    })
})

btnReverter.addEventListener('click', ()=>{
    if (caixa2.children.length != 0) {
        const cursosCaixa2 = [...caixa2.children]
        cursosCaixa2.map((e) => {
            e.classList.remove('destaque')
            caixa1.appendChild(e)
        })
    }
})