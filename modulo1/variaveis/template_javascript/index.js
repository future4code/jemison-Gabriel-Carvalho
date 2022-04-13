/*
1 - resposta: 10, 10 e 5
*/

/*
2 - resposta : 
c = a , c = 10
b = c , b = 10
a = b , a = 10
*/

/*
3 - Resposta:
let horasTrabalhadas = prompt('Quantas horas você trabalha por dia?')
let porDia = prompt('Quanto você recebe por Dia?')
alert(`Você recebe ${horasTrabalhadas/porDia} por hora`)
*/


// Exercício - programa 1

let nome = ''
let idade = ''

console.log(typeof nome, typeof idade)

// o comando typeof retornou o tipo string para as variáveis nome e idade, acredito que ele lê como string por causa das aspas

nome = prompt('Qual o seu nome?')
idade = prompt('Qual a sua idade?')

console.log('Nome =', typeof nome, 'Idade =', typeof idade)

// as variáveis continuam sendo strings

alert(`Olá ${nome} você tem ${idade} anos`)



// Exercício programa - 2

let gostaDeCafe = 'Você gosta de café?'
let estaBem = 'Você está bem ?'
let gostaDeEsporte = 'Você pratica algum esporte?'

let resp1 = 'sim'
let resp2 = 'sim'
let resp3 = 'não'

console.log(gostaDeCafe, resp1)
console.log(estaBem, resp2)
console.log(gostaDeEsporte, resp3)


// Exercício programa - 3

let a = 10
let b = 25
let c = 0

c = a
a = b
b = c

console.log(a,b,c)

// Desafio

let n1 = prompt('Digite um número: ')
let n2 = prompt('Digite outro número: ')

n1 = Number(n1)
n2 = Number(n2)
let soma = n1 + n2
alert(`A soma entre ${n1} + ${n2} = ${soma}`)

let multiplicar = n1 * n2
alert(`A multiplicação entre ${n1} x ${n2} = ${multiplicar} `)

