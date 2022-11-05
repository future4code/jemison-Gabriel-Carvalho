//Crie uma função que receba um parâmetro qualquer e que imprima no console o tipo da variável.

const tipoParametro = (dado: any) => {
  const tipo = typeof dado;
  return `O tipo do parâmetro "${dado}" é ${tipo}`;
};

console.log(tipoParametro(false));
