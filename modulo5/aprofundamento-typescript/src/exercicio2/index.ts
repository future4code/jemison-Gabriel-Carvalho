//a) Quais são as entradas e saídas dessa função? Copie a função para um arquivo .ts e faça a tipagem desses parâmetros
//resposta: a entrada é um array, a função vai tem como objetivo ordenar o array.

function obterEstatisticas(numeros: number[]) {
  const numerosOrdenados = numeros.sort(
    (a: number, b: number): number => a - b
  );

  let soma: number = 0;

  for (let num of numeros) {
    soma += num;
  }

  const estatisticas = {
    maior: numerosOrdenados[numeros.length - 1],
    menor: numerosOrdenados[0],
    media: soma / numeros.length,
  };

  return estatisticas;
}

console.table(obterEstatisticas([2, 65, 22, 1, 33]));

//b) Quais outras variáveis compõem essa função? Explicite a tipagem de todas elas
// resposta: numerosOrdenados:number, soma:number, estatisticas:object => number[]

//c) Crie um type chamado amostra de dados, isto é, um objeto com as propriedades numeros e obterEstatisticas.

type AmostraDeDados = {
  numeros: [2, 3, 5];
  obterEstatisticas: (numeros: number) => {};
};
