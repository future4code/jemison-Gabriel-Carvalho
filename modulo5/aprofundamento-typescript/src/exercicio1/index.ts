//- **Exercício 1**

// O Typescript é uma linguagem um pouco mais criteriosa que o Javascript, então vamos conhecer um pouco desses critérios.

// a) Crie uma variável **minhaString** do tipo `string` e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?

// let minhaString: string = 1
// resposta: ocorre um erro informando que o tipo string não suporta números.

// b) Crie uma variável meuNumero do tipo number e atribua um valor numérico.
// Como fazer para que essa variável também aceite strings? Ou seja, como criamos no typescript uma variável que aceite mais de um tipo de valor?

let meuNumero: number | string = 1;
meuNumero = "1";

// resposta: com o Union type do TS podemos atribuir mais de um tipo a uma variável

// c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:

// `nome`, que é uma string;

// `idade`, que é um número;

// `corFavorita`, que é uma string.

type Pessoa = {
  nome: string;
  idade: number;
  corFavorita: string;
};

//Crie mais três objetos, que também precisam ter apenas os campos definidos acima.
//Crie um tipo Pessoa para garantir que todos os objetos tenham os mesmos campos.

enum ArcoIris {
  AZUL = "azul",
  ROSA = "rosa",
  PRETO = "preto",
}

const Pessoa1: Pessoa = {
  nome: "Ana",
  idade: 22,
  corFavorita: ArcoIris.ROSA,
};

const Pessoa2: Pessoa = {
  nome: "Gabriel",
  idade: 22,
  corFavorita: ArcoIris.PRETO,
};

const Pessoa3: Pessoa = {
  nome: "Maria",
  idade: 27,
  corFavorita: ArcoIris.AZUL,
};
// d) Modifique a propriedade corFavorita para que apenas seja possível escolher entre as cores do arco-íris. Utilize um enum para isso.

const ListaPessoas = [Pessoa1, Pessoa2, Pessoa3];

console.table(ListaPessoas);
