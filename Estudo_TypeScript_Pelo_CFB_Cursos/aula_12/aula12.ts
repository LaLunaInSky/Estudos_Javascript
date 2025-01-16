const soma_Aula12 = (num1:number=0, num2:number=0):number =>{
    return num1 + num2
}

const novoUser_Aula012 = (user:string, pass?:string, nome?:string):void =>{
    const dados_Aula12 = {user,pass,nome}
    console.log(dados_Aula12)
}

console.log(soma_Aula12())
novoUser_Aula012('laluna')