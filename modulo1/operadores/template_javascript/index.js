/*
1- Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa. 

- false
- false
- true
- boolean
*/


/*
2 - Seu colega se aproxima de você falando que o código dele não funciona como devia.  Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console?

- O resultado não será uma soma (ele irá concatenar), pois o prompt retorna string, precisa converter para Number e depois realizar a operação.
*/


/*
3 -  Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso no console seja, de fato, a soma dos dois números. 

let primeiroNumero = Number(prompt('Digite um número: '))
let segundoNumero = Number(prompt('Digite outro número: '))

const soma = primeiroNumero + segundoNumero

console.log(soma)
*/

// Primeiro programa

let idadePessoa = Number(prompt('Qual a sua idade? '))
let idadeAmigo = Number(prompt('Qual a idade do seu melhor amigo(a)?'))

let maiorIdade = idadePessoa > idadeAmigo
let diferencaIdade = idadePessoa - idadeAmigo

console.log(`Sua idade é maior que a do seu amigo? ${maiorIdade}`)
console.log(`Diferença de idade ${diferencaIdade} anos`)


// Segundo programa

let numPar = Number(prompt('Insira um número PAR: '))
let restoDivisao = numPar % 2
console.log(`O resto foi ${restoDivisao}`)

// todo número par divido por dois resulta em resto zero
// todo número ímpar dividido por dois resulta em resto um

// Terceiro programa

let idade = Number(prompt('Qual a sua idade?'))
idade = idade * 12
console.log(`Sua idade tem ${idade} meses`)

idade = idade * 365
console.log(`Sua idade tem ${idade} dias`)

idade = idade * 8760
console.log(`Sua idade tem ${idade} horas`)


// Quarto programa

const num1 = Number(prompt('Informe um numero: '))
const num2 = Number(prompt('Informe outro numero: '))

let maior = num1 > num2
console.log('O primeiro número é maior que o segundo?', maior)

let igual = num1 === num2
console.log('O primeiro número é igual ao segundo?', igual)

let divisivelPorN1 = num1 / num2 % 2 === 0
console.log('O primeiro número é divisivel pelo segundo?', divisivelPorN1)

let divisivelPorN2 = num2 / num1 % 2 === 0
console.log('O segundo número é divisivel pelo primeiro?', divisivelPorN2)


// DESAFIOS

// Desafio 1

let grausFahrenheit = 77
let kelvin = (grausFahrenheit - 32)*(5/9) + 273.15
console.log(`${grausFahrenheit}°F => ${kelvin}°K`)

let grausCelsius = 80
grausFahrenheit = (grausCelsius) * (9/5) + 32
console.log(`${grausCelsius}°C => ${grausFahrenheit}°F`)

let grausCelsius1 = 30
grausFahrenheit = (grausCelsius1) * (9/5) + 32
kelvin = grausCelsius1  + 273.15
console.log(`${grausCelsius1}°C => ${grausFahrenheit}°F`)
console.log(`${grausCelsius1}°C => ${kelvin}°K`)

let grausCelsius2 = Number(prompt('Escolha uma temperatura para converter: '))
grausFahrenheit = (grausCelsius2) * (9/5) + 32
console.log(`${grausCelsius2}°C => ${grausFahrenheit}°F`)
kelvin = grausCelsius2 + 273.15
console.log(`${grausCelsius2}°C => ${kelvin}°K`)


// Desafio 2

let quilowattHora = 280
let consumo = 280 * 0.05

console.log(`valor total do consumo = R$${consumo}`)

let desconto = (15 / 100) * consumo
let novoValor = consumo - desconto
console.log(`com 15% de desconto o valor a pagar será R$${novoValor}`)


