// Exercícos de interpretação de códigos

/*
1 -O que o código abaixo está fazendo? Qual o resultado impresso no console?
    let valor = 0
    for(let i = 0; i < 5; i++) {
    valor += i
    }
    console.log(valor)
Resposta: o código abaixo está contanto de 0 a 4 e somando. resultado; 10
*/

/*
2 - Leia o código abaixo:
    const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
    for (let numero of lista) {
    if (numero > 18) {
            console.log(numero)
        }
}

a) O que vai ser impresso no console?
r: 19, 21, 23, 25, 27, 30. será impresso um embaixo do outro

b)Se eu quisesse acessar o índice de cada elemento dessa lista, o for...of... é suficiente? Se sim, o que poderia ser usado para fazer isso?
r: sim, é possível, porém teriamos que criar uma variável de controle para percorrer cada indice do array.

*/

/*
3- Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?
    
    const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
    let quantidadeAtual = 0
    while(quantidadeAtual < quantidadeTotal){
    let linha = ""
    for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
        linha += "*"
    }
    console.log(linha)
    quantidadeAtual++
    }
r: apareceria 4 linhas, em ordem crescente, *, ** , *** , ****.
*/

// Exercícios de escrita de código

/*
    1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
    
    a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
    b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array
    c) Por fim, imprima o array com os nomes dos bichinhos no console
*/

let nomeBichos = []

let quantidadeBichos = Number(prompt('Quantos bichos de estimação você têm?'))

if (quantidadeBichos === 0 ){
    console.log('Que pena!, você poderia adotar um pet :)!')
}else{
    for (c = 0; c < quantidadeBichos; c++){
        nomeBichos.push(prompt('Digite o nome do bichinho:'))
    }
}
console.log(nomeBichos)

/*
2- Considere que você tenha acesso a um array  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:

a) Escreva um programa que **imprime** cada um dos valores do array original.

b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10

c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array

d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.

e) Escreva um programa que imprima no console o maior e o menor números contidos no array original
*/

let array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110,55]

function imprimirValores(array){
    for(c = 0; c < array.length; c++)
    console.log(array[c])
}
imprimirValores(array)

function imprimirValoresDivididos(array){
    for (i = 0; i < array.length; i++){
        let dividir = array[i] / 10
        console.log(dividir)
    }
}
imprimirValoresDivididos(array)

function novoArray(array){
    let numerosPares = []
    
    for(i = 0; i < array.length; i++){
        let numeros = array[i]
        if(numeros % 2 === 0){
            numerosPares.push(numeros)
        }
    }
    console.log(numerosPares)
}
novoArray(array)

function arrayStrings(array){
    let strings = []
    for(i = 0; i < array.length; i++){
        strings.push(`O elemento do index ${i} é : ${array[i]}`)
        
    }
    console.log(strings)
}
arrayStrings(array)

function maiorEmenor(array){
    let menor = Math.min(...array)
    let maior = Math.max(...array)
    console.log(`O menor número é: ${menor}, o maior número é: ${maior}`)
}
maiorEmenor(array)

// Desafios

// Neste exercício vocês vão implementar uma brincadeira muito simples: "Adivinhe o número que estou pensando". Ele deve ser jogado entre duas pessoas. 

let computador = Math.floor((Math.random() * 20 ) + 1) // computador sorteando um número entre 1 e 20

let tentativas = 1

let advinhar = Number(prompt('Tente advinhar o número que o Computador escolheu'))

while(advinhar != computador){
    advinhar = Number(prompt('Tente advinhar novamente o número que o jogador escolheu'))
    if (advinhar === computador){
        console.log('Parábens você acertou!!')
        console.log(`Número de tentativas => ${tentativas}`)
    }else if(advinhar > computador){
        console.log(`Você chutou o número ${advinhar}, tente um número menor`)
    }else{
        console.log(`Você chutou o número ${advinhar}, tente um número maior`)
    }
    tentativas ++
}
 

//

/*
2. Uma das principais características de uma boa pessoa programadora é conseguir resolver seus problemas independentemente. Queremos que você comece a treinar isso a partir de hoje! Então, vamos pedir para que você faça uma alteração no código acima. Agora, ao invés de ter 2 jogadores, haverá um só; e o seu adversário será o computador. A ideia é: ao iniciar o jogo, você deve sortear um número aleatório (entre 1 e 100) e o usuário terá que ficar chutando o valor até acertar. Mantenha as demais funcionalidades e mensagens pedidas no exercício anterior.
    
Quando resolver o exercício, pare e faça a seguinte reflexão: foi fácil fazer esta alteração? O que você poderia ter feito para que fosse mais fácil? **Deixe comentários no seu código sobre esta reflexão.**

// Não fiz uma alteração tão grande pois acho que está bem fácil esse código, mas para o lado do usuário fica pouco intuitivo tentar acertar diversas vezes sem uma dica mais específica, nesse lado seria bom mudar.
*/