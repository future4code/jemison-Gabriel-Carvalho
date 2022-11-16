## Exercicio 1

a) O primary key é definido para especificar o registro único da tabela, já o varchar é utilizado para definir a quantidade de caracteres que será passada para determinado dado, o comando NOT NULL é um parâmetro que exigi que o dado seja informado e DATE informa o tipo de dado que será recebido.

b) Show databases; Exibe todos os bancos de dados disponíveis no sistema, Show table; exibe todas as tabelas existentes.

## Exercicio 2

a) INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"002",
"GLÓRIA PIRES",
1200000,
"1963-08-23",
"female"
);

b) "Duplicate entry for key 'PRIMARY'", não podemos ter duas pessoas com a mesma chave de registro.

c) falta informar os parâmetros

d) falta informar o nome do ator(a)

e) erro pois tentou adicionar um dado a mais do que foi definido anteriormente

f) INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"002",
"Jeff",
1200,
"1993-08-23",
"men"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"002",
"AMANDDA",
200332,
"2001-08-25",
"female"
);

## Exercicio 3

a) SELECT \* FROM Actor WHERE gender = "female";

b) SELECT salary FROM Actor WHERE name = "Tony Ramos";

c) exibiu um erro de coluna desconhecida

d) SELECT id, name, salary FROM Actor WHERE salary = 500000;

e) esse erro ocorre pois não existe id = "002"

## Exercicio 4

a) selecione todos de atores onde( nome tenha letra "A" ou nome tenha a letra "J") e salário seja maior que 300.000

b) SELECT \* FROM Actor
WHERE (name NOT LIKE "A%") AND salary > 350000

c) SELECT \* FROM Actor
WHERE name LIKE "%g%" OR name LIKE "%G%";

d) SELECT \* FROM Actor
WHERE
(name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
AND salary BETWEEN 350000 AND 900000;

## Exercicio 5

b)
INSERT INTO Filmes (id, title, sinopse, data_lancamento, avalicao)
VALUES(
"001",
"Se eu fosse você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"06/01/2006",
7
);

c)

INSERT INTO Filmes (id, title, sinopse, data_lancamento, avalicao)
VALUES(
"002",
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"27/12/2012",
10
);

d)

INSERT INTO Filmes (id, title, sinopse, data_lancamento, avalicao)
VALUES(
"003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
02/11/2017,
8
);

e)
INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES(
"004",
"Deus é Brasileiro",
"Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
"2003-01-31",
9
)

## Exercicio 6

a) SELECT id, title, avalicao FROM Filmes WHERE id = "001"

b) SELECT \* FROM Filmes WHERE name = "Deus é Brasileiro"

c) SELECT id, title, sinopse FROM Filmes WHERE avalicao = 7

## Exercicio 7

a) SELECT \* FROM Filmes WHERE title = "vida"

b) SELECT \* FROM Movie
WHERE title LIKE "%TERMO DE BUSCA%" OR
sinopse LIKE "%TERMO DE BUSCA%";

c) SELECT \* FROM MOVIE
WHERE release_date < "2020-05-04";

d) SELECT \* FROM MOVIE
WHERE release_date < "2020-05-04" AND
(title LIKE "%TERMO DE BUSCA%" OR
sinopse LIKE "%TERMO DE BUSCA%") AND rating > 7;
