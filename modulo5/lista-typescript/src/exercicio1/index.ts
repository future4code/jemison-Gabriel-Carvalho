// Crie um função que receba uma string com o nome e outra string com uma data de nascimento (ex.: “24/04/1993”)

const usuario = (nome: string, data: string): string => {
  const newData = data.split("/");
  return `Olá me chamo ${nome}, nasci no dia ${newData[0]} do mês ${newData[1]} do ano de ${newData[2]}`;
};

console.log(usuario("Gabriel", "23/05/2000"));
