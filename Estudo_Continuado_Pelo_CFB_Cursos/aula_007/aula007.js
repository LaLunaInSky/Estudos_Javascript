"use strict"

let num1=10,num2=5,num3=15,num4=2,afirmação=String(),res=Boolean()

function operação(op1, op2, comparação=String()) {
    switch (comparação) {
        case '&&':
            afirmação = `${op1} && ${op2}`
            res = (op1) && (op2)
            break

        case '||':
            afirmação = `${op1} || ${op2}`
            res = (op1) || (op2)
            break

        case '!&&':
            afirmação = `!(${op1} && ${op2})`
            res = !((op1)&&(op2))
            break

        case '!||':
            afirmação = `!(${op1} || ${op2})`
            res = !((op1)||(op2))
            break
    }
    return console.log(`${afirmação}? Is ${res}`)
}

/* && */
operação(num1>num2, num1>num3, '&&')

/* || */
operação(num1>num2, num1>num3, '||')

/* ! */
operação(num1>num2, num1>num3, '!&&')
operação(num1>num2, num1>num3, '!||')