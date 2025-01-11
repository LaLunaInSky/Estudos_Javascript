let dados_Aula07 = {
    nome_Aula07: "Douglistildes",
    idade_Aula07: 25,
    status_Aula07: "A",

    apresentação_Aula07:() => {
        console.log(`O usuário ${dados_Aula07.nome_Aula07}, com ${dados_Aula07.idade_Aula07} anos, está ${dados_Aula07.status_Aula07 == "A" ? "online" : "offline"}`)
    }
}

console.log(typeof(dados_Aula07))
console.log(dados_Aula07.apresentação_Aula07())