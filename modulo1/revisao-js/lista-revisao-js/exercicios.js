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
    let numeros = []
    for(let i = 0; i < n; i++){
        numeros.push(i * 2)
    }
    return numeros
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if(ladoA === ladoB && ladoA == ladoC && ladoB === ladoC){
        return 'Equilátero'
    }else if(ladoA === ladoB || ladoA === ladoC  || ladoB === ladoC){
        return 'Isósceles'
    }else if (ladoA != ladoB && ladoA != ladoB != ladoC){
        return 'Escaleno'
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  retornaArrayOrdenado(array)
  let segundoMaior = array[array.length -2]
  let segundoMenor = array[1]
  let novoArray = [segundoMaior, segundoMenor]
  return novoArray
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   let novoObj = {...pessoa, nome: 'ANÔNIMO'
   }
   return novoObj
} 

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   let pessoasPermitidas = pessoas.filter((pessoa) => {
        return pessoa.altura >= 1.5
   }).filter((pessoa) => {
    return pessoa.idade > 14 && pessoa.idade < 60
    })

   return pessoasPermitidas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    return pessoas.filter((pessoa) => {
        return (pessoa.idade <= 14 &&  pessoa.idade >= 60 || pessoa.altura < 1.5 ||pessoa.altura > 1.5 && pessoa.idade <= 14 || pessoa.idade >= 60)
    })
}


// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    let clientesGastos = []    
    
    let clienteJoao = contas[0].compras.reduce((acumulador, numero) => { return (acumulador + numero)})
    clientesGastos.push(clienteJoao)
    
    let clientePaula = contas[1].compras.reduce((acumulador, numero) => { return (acumulador + numero)})
    clientesGastos.push(clientePaula)

    let clientePedro = contas[2].compras.reduce((acumulador, numero) => { return (acumulador + numero)})
    clientesGastos.push(clientePedro)
    
    let clienteLuciano = contas[3].compras.reduce((acumulador, numero) => { return (acumulador + numero)})
    clientesGastos.push(clienteLuciano)

    let clienteArtur = contas[4].compras.reduce((acumulador, numero) => { return (acumulador + numero)})
    clientesGastos.push(clienteArtur)
    
    let saldo = contas.map((saldo) => {
        return saldo.saldoTotal
    })

    let novoSaldo = []
    
    for(let i = 0; i < clientesGastos.length; i++){
        let valor = saldo[i] - clientesGastos[i]
        novoSaldo.push(valor)
    }
    

    let novoObjeto = [
    { cliente: "João", saldoTotal: novoSaldo[0], compras: [] },
    { cliente: "Paula", saldoTotal: novoSaldo[1], compras: [] },
    { cliente: "Pedro", saldoTotal: novoSaldo[2], compras: [] },
    { cliente: "Luciano", saldoTotal: novoSaldo[3], compras: [] },
    { cliente: "Artur", saldoTotal: novoSaldo[4], compras: [] },
    { cliente: "Soter", saldoTotal: 1200, compras: [] }
    ]

    return novoObjeto
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  let ordemAlfabetica = consultas.sort(function (a, b){
    return (a.nome > b.nome) ? 1: ((b.nome > a.nome) ? -1 :0)      
  })
  return ordemAlfabetica
}