// Exercícios de interpretação de código

/*
1- a) Explique o que o código faz. Qual o teste que ele realiza? 
    Resposta: o código pede um número e verifica se esse número dividido por dois tem o resto zero, se for resto 0 ele passa, senão não passa no teste.
    
    b) Para que tipos de números ele imprime no console "Passou no teste"? 
    Resposta: números pares, ou números que tem o resto da divisão por dois igual a zero.
    
    c) Para que tipos de números a mensagem é "Não passou no teste"? 
    Resposta: números ímpares, o resto da  divisão por dois resulta em 1.
*/

/*
2 -
    let fruta = prompt("Escolha uma fruta")
    let preco
    switch (fruta) {
    case "Laranja":
        preco = 3.5
        break;
    case "Maçã":
        preco = 2.25
        break;
    case "Uva":
        preco = 0.30
        break;
    case "Pêra":
        preco = 5.5
        break; // BREAK PARA O ITEM c.
    default:
        preco = 5
        break;
    }
    console.log("O preço da fruta ", fruta, " é ", "R$ ", preco) 

    a) Para que serve o código acima?
    Resposta: o código precifica as frutas de acordo com a escolha do usuário.

    b) Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?
    Resposta: O preço da fruta maça é R$2.25

    c) Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa no console se retirássemos o break que está logo acima do default (o break indicado pelo comentário "BREAK PARA O ITEM c.")?
    Resposta: O preço seria R$5.

*/

/*
3- 3. Leia o código abaixo:
    
    const numero = Number(prompt("Digite o primeiro número."))
    
    if(numero > 0) {
      console.log("Esse número passou no teste")
    	let mensagem = "Essa mensagem é secreta!!!"
    }
    
    console.log(mensagem)
    
    a) O que a primeira linha está fazendo?
    Resposta: convertendo um valor para Number

    b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
    Resposta: se digitar 10, Esse número passou teste.
    caso fosse um número negativo, apareceria "mensagem não está definida".

    c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
    Resposta: terá um erro sim, mensagem is not defined, pois a variável mesangem está apenas acessível dentro do bloco if, ela tem um escopo local.
*/


// Exercícios de escrita de código

/*
1- Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).

a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.

b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.

c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`
*/

let idade = Number(prompt('Informe a sua idade: '))

if (idade >= 18){
    console.log('Você pode dirigir')
}
else{
    console.log('Você não pode dirigir')
}


/*
2- Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar **M** (matutino) ou **V** (Vespertino) ou **N** (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco `if/else`
    ⭐ Se o usuário digitar "V" no prompt, você deverá imprimir no console a mensagem `"Boa Tarde!"`
    Nesse caso, temos 3 resultados diferentes (Bom dia/Tarde/Noite).
*/

let periodoDeEstudo = prompt('Qual período você estuda? "M" para matutino, "V" para Vespertino ou "N" para noturno: ').toUpperCase()

if (periodoDeEstudo === "M"){
    console.log('Bom dia')
} else if (periodoDeEstudo === "V"){
    console.log('Boa Tarde')
}else {
    console.log('Boa noite')
}

// 3 - Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

let periodoEstudo = prompt('Qual período você estuda? "M" para matutino, "V" para Vespertino ou "N" para noturno: ').toUpperCase()

switch(periodoEstudo){
    case 'M':
        console.log('Bom dia')
        break
    case 'V':
        console.log('Boa tarde')
        break
    case 'N':
        console.log('Boa noite')
        break
    default:
        console.log('Boa madrugada')
        break
}

/*
4- Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("

- Desafio : Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem "Bom filme!", pergunte ao usuário, pelo prompt qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc) e imprima no console as mensagens "Bom filme!" e "Aproveite o seu [LANCHINHO]", trocando [LANCHINHO] pelo que o usuário colocou no input.
*/

let generoFilme = prompt('Informe o gênero do filme: ').toUpperCase()
let precoIngresso = prompt('Qual o preço do ingresso?')
let lanche = prompt('Qual lanche iremos comer? ')


if (generoFilme === 'FANTASIA' && precoIngresso == 15){
    console.log(`Bom filme, aproveite o seu lanche: ${lanche}`)
}else {
    console.log('Escolha outro filme :(')
}

// Desafios 

/*
 - Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol. Para esta compra, o usuário deve fornecer algumas informações:
    - Nome completo;
    - Tipo de jogo: IN indica internacional; e DO indica doméstico;
    - Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
    - Categoria: pode ser as opções 1, 2, 3 ou 4;
    - Quantidade de ingressos
    
    O seu sistema deve solicitar estas informações ao usuário, através do `prompt` . Além disso, ele deve imprimir tudo isso, junto com o valor de cada ingresso e o valor total que o usuário tem que pagar (ou seja, o valor unitário do ingresso multiplicado pela quantidade). Abaixo, há a tabela com os valores de cada ingresso e exemplos de execução do programa. Lembrando que o valor de jogos internacionais é o mesmo de jogos domésticos, mas seus preços devem ser multiplicados pelo valor do dólar (considerar o dólar = R$4,10)
*/


let nomeCliente = prompt('Informe seu nome completo: ')
let tipoDoJogo = prompt('Qual o tipo do jogo? NA OU IN').toUpperCase()
let etapaDoJogo = prompt('Informe a etapa do jogo: SF, DT ou FI').toUpperCase()
let categorias = prompt('Informe a categoria: 1, 2, 3 ou 4')
let ingressos = Number(prompt('Quantidade de ingressos: '))

let precoUnitario = ''
let precoTotal = ''

function logicaIngresso (escolha, valorU, valorT, ingressos, funcao){
    
    // categoria 1

    if (escolha == 1 && etapaDoJogo == 'SF' && tipoDoJogo == 'NA'){
        valorU = 1320.00
        valorT = ingressos * valorU
    }else if (escolha == 1 && etapaDoJogo == 'SF' && tipoDoJogo == 'IN'){
        valorU = 1320.00 * 4.10
        valorT = ingressos * valorU
    }if (escolha == 1 && etapaDoJogo == 'DT' && tipoDoJogo == 'NA'){
        valorU = 660.00
        valorT = ingressos * valorU
    }else if (escolha == 1 && etapaDoJogo == 'DT' && tipoDoJogo == 'IN'){
        valorU = 660.00 * 4.10
        valorT = ingressos * valorU
    }if (escolha == 1 && etapaDoJogo == 'FI' && tipoDoJogo == 'NA'){
        valorU = 1920.00
        valorT = ingressos * valorU
    }else if(escolha == 1 && etapaDoJogo == 'FI' && tipoDoJogo == 'IF'){
        valorU = 1920.00 * 4.10
        valorT = ingressos * valorU
    }
    // categoria 2

    if (escolha == 2 && etapaDoJogo == 'SF' && tipoDoJogo == 'NA'){
        valorU = 880.00
        valorT = ingressos * valorU
    }else if (escolha == 2 && etapaDoJogo == 'SF' && tipoDoJogo == 'IN'){
        valorU = 880.00 * 4.10
        valorT = ingressos * valorU
    }if (escolha == 2 && etapaDoJogo == 'DT' && tipoDoJogo == 'NA'){
        valorU = 440.00
        valorT = ingressos * valorU
    }else if (escolha == 2 && etapaDoJogo == 'DT' && tipoDoJogo == 'IN'){
        valorU = 440.00 * 4.10
        valorT = ingressos * valorU
    }if (escolha == 2 && etapaDoJogo == 'FI' && tipoDoJogo == 'NA'){
        valorU = 1320.00
        valorT = ingressos * valorU
    }else if(escolha == 2 && etapaDoJogo == 'FI' && tipoDoJogo == 'IF'){
        valorU = 1320.00 * 4.10
        valorT = ingressos * valorU
    }
    

    // categoria 3

    if (escolha == 3 && etapaDoJogo == 'SF' && tipoDoJogo == 'NA'){
        valorU = 550.00
        valorT = ingressos * valorU
    }else if (escolha == 3 && etapaDoJogo == 'SF' && tipoDoJogo == 'IN'){
        valorU = 550.00 * 4.10
        valorT = ingressos * valorU
    }if (escolha == 3 && etapaDoJogo == 'DT' && tipoDoJogo == 'NA'){
        valorU = 330.00
        valorT = ingressos * valorU
    }else if (escolha == 3 && etapaDoJogo == 'DT' && tipoDoJogo == 'IN'){
        valorU = 330.00 * 4.10
        valorT = ingressos * valorU
    }if (escolha == 3 && etapaDoJogo == 'FI' && tipoDoJogo == 'NA'){
        valorU = 880.00
        valorT = ingressos * valorU
    }else if(escolha == 3 && etapaDoJogo == 'FI' && tipoDoJogo == 'IF'){
        valorU = 880.00 * 4.10
        valorT = ingressos * valorU
    }
    

    // categoria 4
    if (escolha == 4 && etapaDoJogo == 'SF' && tipoDoJogo == 'NA'){
        valorU = 220.00
        valorT = ingressos * valorU
    }else if (escolha == 4 && etapaDoJogo == 'SF' && tipoDoJogo == 'IN'){
        valorU = 220.00 * 4.10
        valorT = ingressos * valorU
    }if (escolha == 4 && etapaDoJogo == 'DT' && tipoDoJogo == 'NA'){
        valorU = 170.00
        valorT = ingressos * valorU
    }else if (escolha == 4 && etapaDoJogo == 'DT' && tipoDoJogo == 'IN'){
        valorU = 170.00 * 4.10
        valorT = ingressos * valorU
    }if (escolha == 4 && etapaDoJogo == 'FI' && tipoDoJogo == 'NA'){
        valorU = 330.00
        valorT = ingressos * valorU
    }else if(escolha == 4 && etapaDoJogo == 'FI' && tipoDoJogo == 'IN'){
        valorU = 330.00 * 4.10
        valorT = ingressos * valorU
    }

    precoUnitario = console.log(`Valor do ingresso: ${valorU}`)
    precoTotal = console.log(`Valor total: ${valorT}`)
}
            


function informacoesUsuario(nome, tipoJogo, etapaDoJogo, categorias,ingressos, funcao){
    console.log('Dados da compra')
    console.log(`Nome do cliente: ${nome}`)
    if (tipoJogo == 'NA'){
        tipoJogo = 'Nacional'
    }else{
        tipoJogo = 'Internacional'
    }
    console.log(`Tipo do jogo: ${tipoJogo}`)
    if (etapaDoJogo == 'SF'){
        etapaDoJogo = 'Semi Final'
    }if (etapaDoJogo == 'DT'){
        etapaDoJogo = 'Decisão de terceiro lugar'
    }else{
        etapaDoJogo = 'Final'
    }
    
    console.log(`Etapa do Jogo: ${etapaDoJogo}`)
    console.log(`Categoria: ${categorias}`)
    console.log(`Quantidade de ingressos: ${ingressos}`)
}

logicaIngresso(categorias, precoUnitario, precoTotal, ingressos, informacoesUsuario(nomeCliente, tipoDoJogo, etapaDoJogo, categorias, ingressos))