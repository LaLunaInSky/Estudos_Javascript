"use strict"

const caixa1 = document.querySelector("#caixa1")
const btn_cursos = [...document.querySelectorAll(".curso")]
const c1_2_btn = document.querySelector("#c1_2")

console.log(caixa1.hasChildNodes())

const verificarSeTemFilhos = (elemento) => {
    console.log(elemento.children.length > 0 ? "Possui fihos" : "NÃO possui filhos")
}

verificarSeTemFilhos(btn_cursos[0])
console.log(c1_2_btn.parentElement.parentElement == btn_cursos[0] ? "Achou o pai do pai" : "Infelizmente não é o pai do pai")