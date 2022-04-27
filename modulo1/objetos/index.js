// Exercícios de interpretação de código

/*
- Exercício 1

saída: Matheus Nachtergaele
saída: Virginia Cavendish
saída: {canal: 'Globo', horario: '14h'}

*/

/*
- Exercício 2

a)
saída: {nome: 'Juca', idade: 3, raca: 'SRD'}
saída: {nome: 'Juba', idade: 3, raca: 'SRD'}
saída: {nome: 'Jubo', idade: 3, raca: 'SRD'}

b) a sintaxe ... ou spread, serve para copiar/clonar os valores de um objeto para outro objeto/ array.
- 

*/

/*
- Exercício 3

a)
saída: false
saída: undefined

b)
- a segunda saída deu undefined pois estava tentando acessar uma propriedade que não foi definida no objeto

*/

// Exercícios de escrita de código


// Exercício 1

// a)

const pessoa = {
    nome: 'Ana',
    apelidos: ['aninha', ' ninha', ' any'],
    imprimir: function(objeto){ 
        console.log(`Me chamo ${objeto.nome}, Mas pode me chamar de ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}.`)
    }
}

// pessoa.imprimir(pessoa)


// b)

const segundaPessoa = {
    ...pessoa,
    apelidos: ['An', 'Anitta', 'Annie'],
    
}

pessoa.imprimir(segundaPessoa)



// Exercício 2

const dadosPessoa = {
    nome: 'Rodrigo',
    idade: 25,
    profissao: 'Jardineiro'
}

const dadosSegundaPessoa = {
    nome: 'Amanda',
    idade: 28,
    profissao: 'Desenvolvedora Web'
}

function imprimirDados(objeto) {
    let informacoes = [objeto.nome, objeto.nome.length, objeto.idade, objeto.profissao, objeto.profissao.length]
    console.log(informacoes)
}

imprimirDados(dadosPessoa)
imprimirDados(dadosSegundaPessoa)



// Exercício 3


let carrinho = []

const frutaVermelha = {
    nome: 'Morango',
    disponibilidade: true
}

const frutaVerde = {
    nome: 'Limão',
    disponibilidade: true
}

const frutaLaranja = {
    nome: 'Caju',
    disponibilidade: true
}


function inserirFrutas(objeto1, objeto2, objeto3){
    carrinho.push(objeto1)
    carrinho.push(objeto2)
    carrinho.push(objeto3)
    
}

inserirFrutas(frutaVermelha, frutaVerde, frutaLaranja)
console.log(carrinho)


// função do desafio 3
function controleEstoque(objeto){
    const estoque = {
        ...objeto,
        disponibilidade: false
        
    }
    console.log(estoque)
}

controleEstoque(frutaLaranja)




// Desafios

// Desafio 1


function dadosUsuario(nome, idade, profissao){
    nome = prompt('Qual o seu nome? ')
    idade = prompt('Quantos anos você tem?')
    profissao = prompt('Qual sua profissão?')
    const pessoa = {
        nome: nome,
        idade: idade,
        profissao: profissao
    }
    console.log(pessoa)
    console.log('tipo de Pessoa é', typeof pessoa)
}

dadosUsuario()


// Desafio 2


const primeiroFilme = {
    anoDeLancamento: 2012,
    nome: 'Os Vingadores',

}

const segundoFilme = {
    anoDeLancamento : 2017,
    nome: 'Logan'
}

function checarFilmes(objeto1, objeto2) {
    let lancouPrimeiro = objeto1.anoDeLancamento < objeto2.anoDeLancamento
    let lancouMesmoAno = objeto1.anoDeLancamento == objeto2.anoDeLancamento
    console.log('O primeiro filme foi lançado antes do segundo?', lancouPrimeiro)
    console.log('O primeiro filme foi lançado no mesmo ano do segundo?', lancouMesmoAno)

}
checarFilmes(primeiroFilme, segundoFilme)




