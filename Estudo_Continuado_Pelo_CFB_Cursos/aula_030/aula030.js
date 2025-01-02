let divs = []

for (let divc=1; divc<7;divc++) {
    divs.push(document.getElementById(`c${divc}`))
}

console.log(divs)

// for (let div of divs) {
//     div.innerText = 'LaLunaInSky'
// }

divs.map((elemento)=>{
    console.log(elemento.innerText)
})