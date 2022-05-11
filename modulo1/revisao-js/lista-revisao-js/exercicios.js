// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    let novoArray = []
    for(let i = array.length; i >= 0; i--){
        novoArray.push(array[i])
    }
    novoArray.splice(0,1)
    return novoArray
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    function ordernar( a, b){
        return a - b
    }
    return array.sort(ordernar)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let pares = []
  for(let i = 0; i < array.length; i++){
      if(array[i] % 2 == 0){
          pares.push(array[i])
      }
  }
  return pares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let paresElevados2 = []
    for(let i = 0; i <= array.length; i++){
        if(array[i] % 2 == 0){
            let numerosElevados = array[i] ** 2
            paresElevados2.push(numerosElevados)
        }
    }
    return paresElevados2
}   

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    retornaArrayOrdenado(array)
    let maior = array[array.length -1]
    return maior
}


// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let propriedadesNumericas = {}
    let maior = 0
    let menor = 0
    if(num1 > num2 && num2 < num1){
        maior = num1
    }else{
        maior = num2
    }if (num2 < num1 && num1 > num2){
        menor = num2
    }else{
        menor = num1
    }
    
    let diferenca = maior - menor
    let divisivel = maior % menor == 0
    
    propriedadesNumericas = {
        maiorNumero: maior,
        maiorDivisivelPorMenor: divisivel,
        diferenca: diferenca

    }
    return propriedadesNumericas
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}