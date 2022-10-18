//Crie uma aplicação Node que receba uma string representando uma tarefa.
//O programa deve adicionar a nova tarefa em uma variável que represente uma lista de tarefas.
//A lista de tarefas pode estar criada antes da execução do código. Após adicionar o item à lista, exiba a lista atualizada.

const listaDeTarefas = ["Limpar a casa"];
const novaTarefa = process.argv[2];

const adicionarTarefa = (novaTarefa) => {
  const novaListaDeTarefas = [...listaDeTarefas, novaTarefa];
  return novaListaDeTarefas;
};

console.log(adicionarTarefa(novaTarefa));
