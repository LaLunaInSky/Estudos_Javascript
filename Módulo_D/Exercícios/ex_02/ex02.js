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
        /*bebê - criança - adolescente - jovem adulto - adulto - velho
        0 á 2    até 11     até 17         até 29       até 59  até morrer
        */
       if (idade <= 2) {
        if (gêneroF == true) {
            imagem = 'images/bebê-f.jpg'
        } else if (gêneroM == true) {
            imagem = 'images/bebê-m.jpg'
        }
       } else if (idade <= 11) {
        if (gêneroF == true) {
            imagem = 'images/criança-f.jpg'
        } else if (gêneroM == true) {
            imagem = 'images/criança-m.jpg'
        }
       } else if (idade <= 17) {
        if (gêneroF == true) {
            imagem = 'images/adolescente-f.jpg'
        } else if (gêneroM == true) {
            imagem = 'images/adolescente-m.jpg'
        }
       } else if (idade <= 29) {
        if (gêneroF == true) {
            imagem = 'images/jovem-f.jpg'
        } else if (gêneroM == true) {
            imagem = 'images/jovem-m.jpg'
        }
       } else if (idade <= 59) {
        if (gêneroF == true) {
            imagem = 'images/adulto-f.jpg'
        } else if (gêneroM == true) {
            imagem = 'images/adulto-m.jpg'
        }
       } else {
        if (gêneroF == true) {
            imagem = 'images/idoso-f.jpg'
        } else if (gêneroM == true) {
            imagem = 'images/idoso-m.jpg'
        }
       }
    }

    if (validação[0] == true && validação[1] == true) {
        resultado.innerHTML = `<p id='resultadoP'>Detectamos ${gêneroFinal} com ${idade} anos.</p>`
        resultado.innerHTML += `<aside><img src="${imagem}" alt="imagem rosto de acordo com a idade" id='imagemRosto'></aside>`
        
    } else {
        alert('Erro, alguma informação está errado ou faltando!')
    }

    
}