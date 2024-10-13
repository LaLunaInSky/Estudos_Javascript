function Verificação() {
    var anoNas = document.querySelector('input#anoDeNascimento').value
    var gêneroM = document.querySelector('input#respostaMas').checked
    var gêneroF = document.querySelector('input#respostaFem').checked
    var resultado  = document.querySelector('section#resultado')

    resultado.innerHTML = `<p>${anoNas} | ${gêneroM} | ${gêneroF}</p>`
}