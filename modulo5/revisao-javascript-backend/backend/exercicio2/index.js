const cadastraCliente = [
  {
    id: 1,
    nome: "Fulano",
  },
  {
    id: 2,
    nome: "Ciclano",
  },
  {
    id: 3,
    nome: "Beltrano",
  },
  {
    id: 4,
    nome: "Fulana",
  },
];
cadastraCliente[4] = {
  id: 5,
  nome: "Fulano",
};

console.log(cadastraCliente);

// Exercicio tabuada

const tabuada = (a) => {
  for (let i = 0; i < 11; i++) {
    const resultado = i * a;
    const tabuadaResultado = `${i} x ${a} = ${resultado}`;
    console.log(tabuadaResultado);
  }
};

tabuada(20);
