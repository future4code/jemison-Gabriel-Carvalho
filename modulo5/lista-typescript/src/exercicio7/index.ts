//

type Produtos = {
  nome: string;
  quantidade: number;
  valorUnitario: number;
};

const produtosVariados: Produtos[] = [
  { nome: "MacMugffin", quantidade: 37, valorUnitario: 51.04 },
  { nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0 },
  { nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5 },
  { nome: "O precioso", quantidade: 1, valorUnitario: 9181.923 },
  { nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17 },
  { nome: "Plumbus", quantidade: 13, valorUnitario: 140.44 },
  { nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915 },
];

const valorUnidade = produtosVariados.map((valor) => {
  return valor.valorUnitario.toFixed(2).replace(".", ",");
});

const ajustaPreco = (preco: Produtos[]) => {
  let valorAjustado: Produtos[];
  for (let i = 0; i <= preco.length; i++) {
    let novoValor: string = preco[i].valorUnitario.toFixed(2).replace(".", ",");
    preco[i].valorUnitario = Number([novoValor]);
  }
};
