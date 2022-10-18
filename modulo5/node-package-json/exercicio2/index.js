// Crie uma aplicação Node que recebe uma string representando uma operação matemática e dois valores numéricos. O retorno deverá ser o resultado da operação selecionada utilizando os 2 valores fornecidos.

const operacao = process.argv[2];
const n1 = process.argv[3];
const n2 = process.argv[4];

const soma = (operacao, n1, n2) => {
  const num1 = Number(n1);
  const num2 = Number(n2);
  switch (operacao) {
    case "soma":
      return num1 + num2;
      break;
    case "sub":
      return num1 - num2;
      break;
    case "mult":
      return num1 * num2;
      break;
    case "div":
      return num1 / num2;
      break;
    default:
  }
};

console.log(soma(operacao, n1, n2));
