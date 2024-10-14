function Verificação() {
    var date = new Date()
    var anoAtual = date.getFullYear()
    var anoNas = document.querySelector('input#anoDeNascimento').value
    var gêneroM = document.querySelector('input#respostaMas').checked
    var gêneroF = document.querySelector('input#respostaFem').checked
    var resultado  = document.querySelector('section#resultado')
    var idade = 0
    var gêneroFinal = ''
    var validação = [false, false]
    var imagem = null

    if (anoNas <= anoAtual && anoNas >= (anoAtual - 110)) {
        idade = anoAtual - Number(anoNas)
        validação[0] = true
    }

    if (gêneroF == true || gêneroM == true) {
        validação[1] = true
        if (gêneroF == true) {
            gêneroFinal = 'Mulher'
        } else if (gêneroM == true) {
            gêneroFinal = 'Homem'
        }
    }

    if (validação[0] == true) {

    }

    if (validação[0] == true && validação[1] == true) {
        resultado.innerHTML = `<p id='resultadoP'>Detectamos ${gêneroFinal} com ${idade} anos.</p>`
        resultado.innerHTML += `<aside><img src="${imagem}" alt="imagem rosto de acordo com a idade" id='imagemRosto'></aside>`
        
    } else {
        alert('Erro, alguma informação está errado ou faltando!')
    }

    
}

var resultado  = document.querySelector('section#resultado')
resultado.innerHTML += `<aside><img src="" alt="" id='imagemRosto'></aside>`