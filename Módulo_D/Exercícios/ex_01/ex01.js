var data = new Date()
var horaAtual = data.getHours()
var minutoAtual = data.getMinutes()

var comprimento = document.querySelector('h1#comprimento')
var infoHora = document.querySelector('section#infoHora')
var imgHora = document.querySelector('section#imgHora')

infoHora.innerHTML = `<p>Agora são <span id="horaMostrador">${horaAtual}:${minutoAtual}</span></p>`

if (horaAtual < 13) {
    if (horaAtual < 5) {
        /*Boa madrugada*/
        comprimento.innerHTML = 'Boa Madrugada!'
        document.body.style.backgroundColor = '#2B3245'  
        imgHora.innerHTML = `<img src="images/boa_madrugada.jpg" alt="Imagem Madrugada">`
    } else {
        /*Bom dia*/
        comprimento.innerHTML = 'Bom Dia!'
        document.body.style.backgroundColor = `#FF992F`
        imgHora.innerHTML = `<img src="images/bom_dia.jpg" alt="Imagem Dia">`
    }

} else if (horaAtual < 24) {
    if (horaAtual < 19) {
        /*Boa tarde*/
        comprimento.innerHTML = 'Boa Tarde!'
        document.body.style.backgroundColor = `#96427F`
        imgHora.innerHTML = `<img src="images/boa_tarde.jpg" alt="Imagem Tarde">`
    } else {
        /*Boa noite*/
        comprimento.innerHTML = 'Boa Noite!'
        document.body.style.backgroundColor = `#205993`
        imgHora.innerHTML = `<img src="images/boa_noite.jpg" alt="Imagem Noite">`
    }
}