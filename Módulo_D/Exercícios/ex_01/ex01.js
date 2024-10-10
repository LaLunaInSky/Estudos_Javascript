var data = new Date()
var horaAtual = data.getHours()
horaAtual = 23

var infoHora = document.querySelector('section#infoHora')
var imgHora = document.querySelector('section#imgHora')

infoHora.innerHTML = `Agora são ${horaAtual} horas.`

imgHora.innerHTML = `teste`