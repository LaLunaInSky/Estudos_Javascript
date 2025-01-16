"use strict";
const soma_Aula12 = (num1 = 0, num2 = 0) => {
    return num1 + num2;
};
const novoUser_Aula012 = (user, pass, nome) => {
    const dados_Aula12 = { user, pass, nome };
    console.log(dados_Aula12);
};
console.log(soma_Aula12());
novoUser_Aula012('laluna');
