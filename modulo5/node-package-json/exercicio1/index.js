//  Responda como comentário no seu código: como fazemos para acessar os parâmetros passados na linha de comando para o Node?
// r: utilizando o process.argv[2]

const nome = process.argv[2];
const idade = process.argv[3];

const usuario = (nome, idade) => {
  const novaIdade = Number(idade) + 7;
  return `Olá ${nome}, você tem ${idade} anos. Em 7 anos você terá ${novaIdade} anos`;
};

console.log(usuario(nome, idade));
