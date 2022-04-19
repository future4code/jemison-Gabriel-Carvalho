// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  let altura = Number(prompt('Informe a altura do retangulo: '))
  let largura = Number(prompt('Informe a largura do retangulo: '))
  let area = altura * largura
  console.log(area)
}


// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt('Informe o ano Atual: '))
  const anoNascimento = Number(prompt('Informe seu Ano de nascimento'))
  let idade = anoAtual - anoNascimento
  console.log(idade)
}


// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  let imc = peso / (altura * altura)
  return imc
}
calculaIMC(60, 1.76)

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  let nome = prompt('Qual o seu nome? ')
  let idade = Number(prompt('Qual a sua idade? '))
  let email = prompt('Informe seu email: ')
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let cores = []
  let cor1 = cores.push(prompt('Informe uma cor que voce gosta: '))
  let cor2 = cores.push(prompt('Informe outra cor: '))
  let cor3 = cores.push(prompt('Informe mais uma cor: '))
  console.log(cores)
}


// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  let texto = prompt('Digite uma mensagem: ')
  string = texto.toUpperCase()
  return string
}


// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  let precoDoIngresso = custo / valorIngresso
  return precoDoIngresso
}
calculaIngressosEspetaculo(1000, 40)

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  let mesmoTamanho = string1.length === string2.length
  return mesmoTamanho
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  let primeiro = array[0]
  return primeiro
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  let ultimo = array[array.length -1]
  return ultimo
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let ultimo = array[array.length -1]
  let adicionar = array.unshift(ultimo)
  let remover = array.pop(ultimo)
  let segundo = array[1]
  let adicionarSegundo = array.push(segundo)
  let removerSegundo = array.splice(1,1)
  return array
}
  
// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  let teste = string1.toUpperCase() === string2.toUpperCase()
  return teste
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt('Informe o ano atual: '))
  const anoDeNascimento = Number(prompt('Informe seu ano de nascimento: '))
  let anoDeEmissaoDoRG = Number(prompt('Informe o ano que fez seu RG: '))
  let idade = anoAtual - anoDeNascimento
  let checarSituacao = anoAtual - anoDeEmissaoDoRG

  let renovarEm5Anos = idade <= 20 && checarSituacao >= 5 
  let renovarEm10Anos = idade <= 20 && idade <= 50 && checarSituacao >= 10
  let renovarEm15Anos = idade > 50 && checarSituacao >= 15

  console.log(renovarEm5Anos)
  //console.log(renovarEm10Anos)
  //console.log(renovarEm15Anos)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  ano = Number(prompt('digite um ano: '))
  let multiplo4 = (ano % 4 == 0)
  let multiplo400 = (ano % 400 == 0)
  let multiplo100 = (ano % 100 != 0) 
  let teste = multiplo4 && multiplo100 != multiplo400 
  return teste

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  let idade = prompt('Você tem mais de 18 anos?')
  let ensinoMedio = prompt('Você possui ensino médio completo?')
  let horarioCurso = prompt('Você possui disponibilidade exclusiva nos horários do curso?')
  let teste = idade.toUpperCase() == "SIM" && ensinoMedio.toUpperCase() == "SIM" && horarioCurso.toUpperCase() == "SIM"
  
  console.log(idade)
  console.log(ensinoMedio)
  console.log(horarioCurso)
  console.log(teste)
}