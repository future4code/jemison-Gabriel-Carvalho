// a) Como você faria, já com a extensão instalada, para transpilar(converter) esse arquivo typescript em um arquivo javascript?
// resposta: criando um script no arquivo package.json, informando o caminho do arquivo ou utilizando o comando tsc nome-do-arquivo

// b) E se este arquivo estivesse dentro de uma pasta chamada src. O processo seria diferente? Se sim, descreva as diferenças.
// resposta: seria diferente pois precisa especificar no arquivo tsconfig.json o rootDir, o local onde seria buscado esse arquivo.

//c) Existe alguma maneira de transpilar múltilplos arquivos de uma vez só? Caso conheça, explique como fazer.
// resposta: utilizando o  comando tsc podemos compilar vários arquivos por nome especifico ou apenas executar que ele irá transpilar todos aquivos ts encontrados.

type pokemon = {
  name: string;
  types: string;
  healthPoints: number;
};

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28,
};

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31,
};

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35,
};
