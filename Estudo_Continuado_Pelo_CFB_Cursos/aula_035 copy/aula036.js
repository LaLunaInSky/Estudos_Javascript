"use strict"

const caixa1 = document.querySelector('#caixa1')
const curso1 =  document.querySelector('#c1')

caixa1.addEventListener('click', ()=>{
    console.log('clicou')
})

curso1.addEventListener('click', (evento)=>{
    evento.stopPropagation()
    console.log('html')
})