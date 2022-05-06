//Exercícios de interpretação de código

/*
1 - Leia o código abaixo:
    const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item,index,array)
  })
- O que vai ser impresso no console?
r: ele vai imprimir o array de objetos, depois o array de objetos + index, por último array de objetos + index + array

*/

/*
2- Leia o código abaixo:

    const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
    ]

    const novoArrayB = usuarios.map((item, index, array) => {
    return item.nome
    })

    console.log(novoArrayB)

- O que vai ser impresso no console?
r: Vai imprimir somente os nomes no novoArrayB
*/


/*
3- Leia o código abaixo
    
    const usuarios = [
      { nome: "Amanda Rangel", apelido: "Mandi" },
      { nome: "Laís Petra", apelido: "Laura" },
      { nome: "Letícia Chijo", apelido: "Chijo" },
    ]
    
    const novoArrayC = usuarios.filter((item, index, array) => {
       return item.apelido !== "Chijo"
    })
    
    console.log(novoArrayC)

- O que vai ser impresso no console?
r: será impresso o nome e apelido da Amanda e Laís, Chijo não será incluída.
*/

//Exercícios de escrita de código

// Exercício 1

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

const nomesPet = pets.map((item) =>{
    return item.nome
})

console.log(nomesPet)

//
const cachorrosSalsichas = pets.filter((item) =>{
    if (item.raca == 'Salsicha'){
        return item
    }
})

console.log(cachorrosSalsichas)

const mensagemPoodle = pets.filter((item) => item.raca === 'Poodle').map((item) =>{
    return `Você ganhou um cupom de desconto de 10% para tosar ${item.nome}`
})

console.log(mensagemPoodle)


//Exercício 2

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

const nomeProdutos = produtos.map((item) => {return item.nome})

console.log(nomeProdutos)

//
const descontoProdutos = produtos.map((item) => {
    let preco = item.preco
    let desconto = (preco * 5) / 100
    const novoPreco = preco - desconto
    
    const novoObjeto = {
        nome: item.nome, 
        preco: novoPreco.toFixed(2)
    }

    return novoObjeto
})

console.log(descontoProdutos)

//
const produtosBebidas = produtos.filter((item) =>{return item.categoria === 'Bebidas'})
    
console.log(produtosBebidas)

//
const encontrarYpe = produtos.filter((item) => {
    return item.nome.includes('Ypê')
})
console.log(encontrarYpe)

//
const mensagemYpe = encontrarYpe.map((item) => {
    return `Compre ${item.nome} por ${item.preco}`
})

console.log(mensagemYpe)


// Desafios

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

 const ordenando = pokemons.map((item) => {
     return item.nome
 })

ordenando.sort()

const pokemonsTipos = pokemons.map((item) =>{
    return item.tipo
})


const novosTipos = [...new Set(pokemonsTipos)]

console.log(novosTipos)
