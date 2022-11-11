## exercicio 1

RENAME TABLE Filmes to MOVIES;

ALTER TABLE Actor ADD favorite_ice_cream_flavor VARCHAR(255);

SET SQL_SAFE_UPDATES = 0;

a) esse comando "ALTER TABLE Actor CHANGE gender sex VARCHAR(6);" está removendo a coluna de sálario

b) "ALTER TABLE Actor CHANGE gender sex VARCHAR(6);" troca o genero para sex

c) "ALTER TABLE Actor CHANGE gender gender VARCHAR(255)"

d) "ALTER TABLE Actor CHANGE gender gender VARCHAR(100);"

# exercicio 2

a) UPDATE Actor
SET
name = "Romão",
birth_date = "1960-02-29"
WHERE id = "003";

b) UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";

c) UPDATE Actor
SET name = "Julio Paes",
salary = 300222,
birth_date = "1960-05-22",
gender = "Male"
WHERE id = "005";

## exercicio 3

a) DELETE FROM Actor WHERE name = "Fernanda Montenegro";

b) DELETE FROM Actor WHERE gender = "male" AND salary > 100000000;

## exercicio 4

a)
SELECT MAX(salary) FROM Actor;

b)
SELECT MIN(salary) FROM Actor WHERE gender = "female";

c)
SELECT COUNT(\*) FROM Actor WHERE gender = "female";

d)
SELECT SUM(salary) FROM Actor;

## Exercício 5

a)
Faz a contagem da quantidade da tabela Actor

b)
SELECT id, name FROM Actor
ORDER BY name DESC;

c)
SELECT \* FROM Actor
ORDER BY salary ASC;

d)
SELECT \* FROM Actor
ORDER BY salary DESC
LIMIT 3;

e)
SELECT AVG(salary), gender
FROM Actor
GROUP BY gender;

## Exercício 6

a)
ALTER TABLE Movies ADD playing_limit_date DATE;

b)
ALTER TABLE Movies CHANGE rating RATING FLOAT;

c)
UPDATE Movies
SET playing_limit_date = "2020-12-31"
WHERE id = "001";

d)
DELETE FROM Movies WHERE id = "001";
