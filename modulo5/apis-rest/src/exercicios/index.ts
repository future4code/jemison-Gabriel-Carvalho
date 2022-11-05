// exercicio 1

// Vamos começar fazendo um endpoint que busque todos os usuários de uma lista. A lista está disponível abaixo.

// a. Qual método HTTP você deve utilizar para isso?
// resposta: o metódo get

//b. Como você indicaria a entidade que está sendo manipulada?
// resposta: http:localhost:3003/users

import express, { Response, Request } from "express";
import cors from "cors";
import { users } from "./data";
import { CONTA, Usuario } from "./types";

const app = express();
app.use(express.json());
app.use(cors());

app.listen(3003, () => {
  console.log("Servidor rodando na porta 3003");
});

// app.get("/users", (req: Request, res: Response) => {
//   const allUsers = users.map((user) => {
//     return user;
//   });
//   res.status(200).send(allUsers);
// });

// app.get("/users/:type", (req: Request, res: Response) => {
// const tipo  = req.params.type

//   const usersType = users.filter((user) => {
//     return user.type === CONTA.ADMIN;
//   });

//   res.status(200).send(usersType);
// });

//a. Como você passou os parâmetros de type para a requisição? Por quê?
// resposta: passei pelo params, para retornar o type especifico

//b. Você consegue pensar em um jeito de garantir que apenas types válidos sejam utilizados?
// resposta: podemos utilizar o enum do typescript para limitar as opções para opções válidas.

// app.get("/users/:name", (req: Request, res: Response) => {
//   const name = req.query.name as string;

//   const user = users.filter((user) => {
//     return user.name.toLowerCase() === name;
//   });

//   res.status(200).send(user);
// });

//*a. Qual é o tipo de envio de parâmetro que costuma ser utilizado por aqui?*
// resposta:

//b. Altere este endpoint para que ele devolva uma mensagem de erro caso nenhum usuário tenha sido encontrado.

app.post("/addUser", (req: Request, res: Response) => {
  let { id, name, email, type, age }: Usuario = req.body;

  const novoUsuario = {
    id,
    name,
    email,
    type,
    age,
  };

  users.push(novoUsuario);
  res.status(200).send(users);
});
