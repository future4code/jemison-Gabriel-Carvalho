//O seguinte array traz as pessoas colaboradoras de uma empresa, com seus salários, setores e se trabalham presencialmente ou por home office:

enum Setores {
  MARKETING = "marketing",
  VENDAS = "vendas",
  FINANCEIRO = "financeiro",
}

type Colaborador = {
  nome: string;
  salário: number;
  setor: Setores;
  presencial: boolean;
};

const colaboradores: Colaborador[] = [
  { nome: "Marcos", salário: 2500, setor: Setores.MARKETING, presencial: true },
  { nome: "Maria", salário: 1500, setor: Setores.VENDAS, presencial: false },
  {
    nome: "Salete",
    salário: 2200,
    setor: Setores.FINANCEIRO,
    presencial: true,
  },
  { nome: "João", salário: 2800, setor: Setores.MARKETING, presencial: false },
  { nome: "Josué", salário: 5500, setor: Setores.FINANCEIRO, presencial: true },
  { nome: "Natalia", salário: 4700, setor: Setores.VENDAS, presencial: true },
  { nome: "Paola", salário: 3500, setor: Setores.MARKETING, presencial: true },
];

function retornarColaboradorPresencial(pessoas: Colaborador[]) {
  const colaboradoresPresenciais: Colaborador[] = pessoas.filter(
    (colaborador) => {
      return (
        colaborador.setor === Setores.MARKETING &&
        colaborador.presencial === true
      );
    }
  );
  return colaboradoresPresenciais;
}

console.log(retornarColaboradorPresencial(colaboradores));
