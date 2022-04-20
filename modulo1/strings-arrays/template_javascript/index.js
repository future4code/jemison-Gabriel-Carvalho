/*
1- exercícios de escrita de códigos
saida: a. undefined
saida: b. null
saida: c. 11
saida: d. array is not defined
saida: e. array is not defined 
saida: f. array is not defined
*/

/*
2 - exercício 2
saida:SUBI NUM ÔNIBUS EM MIRROCOS 27
*/

/*
1- Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem: O e-mail emailDoUsuario foi cadastrado com sucesso. Seja bem-vinda(o), nomeDoUsuario!

let nomeDoUsuario = prompt('Qual o seu nome?')
let emailDoUsuario = prompt('Informe o seu email:')
console.log(`O email ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}`)

*/

/*
2- Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
    
a) Imprima no console o array completo

b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.

c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no consolea nova lista

let comidasPreferidas = ['Lasanha', 'Frango', 'Carne', 'Macarrão', 'Coxinha']
console.log(comidasPreferidas)
console.log("Essas são minhas comidas preferidas:")
console.log(comidasPreferidas[0])
console.log(comidasPreferidas[1])
console.log(comidasPreferidas[2])
console.log(comidasPreferidas[3])
console.log(comidasPreferidas[4])

let comidaPreferidaUsuario = prompt('Qual sua comida favorita?')
comidasPreferidas.splice(1,1, comidaPreferidaUsuario)
console.log(comidasPreferidas)
*/

/*
3- 3. Faça um programa, seguindo os passos:
a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
c) Imprima o array no console
d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
e) Remova da lista o item de índice que o usuário escolheu.
f) Imprima o array no console

let listaDeTarefas = []
let TarefasDoUsuario1 = listaDeTarefas.push(prompt('Cite 3 tarefas que você precisa fazer hoje:'))
let TarefasDoUsuario2 = listaDeTarefas.push(prompt('Cite 3 tarefas que você precisa fazer hoje:'))
let TarefasDoUsuario3 = listaDeTarefas.push(prompt('Cite 3 tarefas que você precisa fazer hoje:'))
console.log(listaDeTarefas)
let EscolhaDoUsuario = Number(prompt('Remova uma tarefa que você citou anteriormente, digitando 1, 2 ou 3:'))
let remover = listaDeTarefas.splice(EscolhaDoUsuario -1, 1)
console.log(listaDeTarefas)
*/


/*
.Desafios

1 - Receba uma frase e retorne um array onde cada elemento é uma das palavras da frase, ignorando os espaços

let frase = '                 Hoje o dia está lindo!                       '
let fraseArray = frase.trim().split('')
console.log(fraseArray)


2- Dado o array ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"], faça um programa que acha o índice da palavra Abacaxi e imprime tanto o índice quanto o tamanho do array

let frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
let elemento = 'Abacaxi'
let indice = frutas.indexOf(elemento)
console.log(`Índice do 'Abacaxi': ${indice}, tamanho do array: ${frutas.length}`)

*/

