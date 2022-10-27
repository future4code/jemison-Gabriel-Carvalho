import express, { Response, Request } from "express";
import cors from "cors";
import { usuarios, post } from "./data";

const app = express();

app.use(express.json());

app.use(cors());

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});

app.get("/users", (req: Request, res: Response) => {
  const users = usuarios.map((usuario) => {
    return usuario;
  });

  res.status(200).send(users);
});

app.get("/posts", (req: Request, res: Response) => {
  const postUsers = post.map((post) => {
    return post;
  });

  res.status(200).send(post);
});

app.get("/posts/:id", (req: Request, res: Response) => {
  const postId = Number(req.params.id);

  if (!postId) {
    res.status(400).send("informe um id");
  }

  const postUser = post.filter((post) => {
    return post.id === postId;
  });

  res.status(200).send(postUser);
});
