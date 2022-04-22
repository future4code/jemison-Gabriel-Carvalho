// Exercícios de interpretação de código

/*
- EXERCÍCIO 1 
saida: 10
saida: 50
- não apareceria nada no console, porém a função continua funcionando

/

/*
- EXERCÍCIO 2
- Essa função recebe um texto do usuário, coloca todas as letras em minúsculas e verifica se existe 'cenoura' no texto.
- i : true
- ii:  true
- iii: true

*/


//Exercícios de escrita de código

/*
- EXERCÍCIO 1
a) 

function minhasInformacoes(){
    console.log('Eu sou Gabriel, tenho 21 anos, moro em São Paulo e sou estudante.')
}
minhasInformacoes()


b)

function informacoesDoUsuario(nome, idade, cidade, profissao){
    let nomeUsuario = prompt('Qual o seu nome?')
    let idadeUsuario = prompt('Quantos anos você tem?')
    let cidadeUsuario = prompt('Em qual cidade você mora?')
    let profissaoUsuario = prompt('Qual a sua profissão?')
    let mensagem = `Eu sou ${nome}, tenho ${idade}, mora na cidade de ${cidade}, minha profissão é ${profissao}`
    
    return mensagem

}
informacoesDoUsuario()


- EXERCÍCIO 2

a)

function somarDoisNum(n1, n2) {
    let somar = n1 + n2
    console.log(somar)

}
somarDoisNum(2, 5)


b)

function maiorOuIgual(n1, n2) {
    let maiorIgual = n1 > n2 || n1 === n2
    let resposta = `${n1} é maior ou igual a ${n2}? ${maiorIgual}`
    return resposta
} 
maiorOuIgual(2,2)


c)

function ePar(num){
    let numero = num % 2 == 0
    let resposta = `${num} é Par? ${numero} `
    console.log(resposta)
    return resposta
}
ePar(23)


d)

function mensagemFormatada(string) {
    let tamanho = string.length
    let maiuscula = string.toUpperCase()
    console.log(`Tamanho da mensagem ${tamanho} caracteres, formatada: ${maiuscula}`)

}
mensagemFormatada('só sei que nada sei')


*/


/*
- EXERCÍCIO 3

let  n1 = Number(prompt('Digite um número: '))
let n2 = Number(prompt('Digite outro número:'))
console.log('Números escolhidos:', n1, 'e', n2)

function somar(num1, num2) {
    let somar = num1 + num2
    console.log('Soma: ',somar)
}
somar(n1, n2)


function subtrair(num1, num2) {
    let subtrair = num1 - num2
    console.log('Diferença: ',subtrair)
}

subtrair(n1, n2)


function multiplicar(num1, num2) {
    let multiplicar = num1 * num2
    console.log('Multiplicação: ',multiplicar)
}

multiplicar(n1, n2)


function dividir(num1, num2) {
    let divisao = num1 / num2
    console.log('Divisão: ',divisao)
}

dividir(n1, n2)

*/
