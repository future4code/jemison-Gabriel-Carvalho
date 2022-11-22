## Exercicio 1

a) A chave estrangeira (FOREIGN KEY) cria uma relação com uma tabela de origem, por exemplo: A tabela de avaliação se relaciona com a tabela de filmes.

b) INSERT INTO Rating (id, comment, movie_id, rate)
VALUES(
"001",
"Filme God",
"001",
10
);

c) error Code: 1062. Duplicate entry '001' for key 'PRIMARY' entrada duplicada, pois não foi capaz de adicionar um comentario a um filme que não existe!

d) ALTER TABLE MOVIES DROP COLUMN Rate;

e) não pode apagar porque ela possui uma restrição de chave estrangeira.

## Exercicio 2

a) essa tabela estabelece uma relação entre filmes e atores.


c)Error Code: 1452. Não posso adicionar uma linha, pois os id's não existem

d)Error Code: 1451. Não posso apagar uma linha pai, pois tem uma retição de chave estrageira

## Exercicio 3


