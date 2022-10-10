const primeiraLista = [
  {
    nome: "Banana",
  },
  {
    nome: "Laranja",
  },
];

const segundaLista = [
  {
    nome: "Laranja",
  },
  {
    nome: "Cebola",
  },
];

function geraItensUnicos(primeiraLista, segundaLista) {
  const novaLista = [];
  for (let i = 0; i >= primeiraLista.length; i++) {
    if (primeiraLista[i].nome === segundaLista[i].nome) {
      primeiraLista[i].nome.pop(i.nome);
      return novaLista.push(segundaLista[i].nome);
    }
  }
  console.log(novaLista);
}

geraItensUnicos(primeiraLista, segundaLista);
