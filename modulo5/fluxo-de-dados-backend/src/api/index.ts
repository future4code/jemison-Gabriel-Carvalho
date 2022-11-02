import express, { Request, Response } from "express";
import cors from "cors";
import { produtos } from "./data";
import { Produto } from "./type";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
  console.log("Servidor executando na porta 3003");
});

app.post("/addproduto", (req: Request, res: Response) => {
  let { id, name, price }: Produto = req.body;

  id = Math.floor(Date.now() * Math.random()).toString(36);

  const novoProduto = {
    id,
    name,
    price,
  };

  produtos.push(novoProduto);
  res.status(200).send(produtos);
});

app.get("/produtos", (req: Request, res: Response) => {
  const todosProdutos = produtos.map((produto) => {
    return produto;
  });

  res.status(200).send(todosProdutos);
});

app.put("/produtos/:id/price", (req: Request, res: Response) => {
  const id = req.params.id;
  const price: number = req.body.price;

  const editarProduto = produtos.map((produto) => {
    if (produto.id === id) {
      produto.price = price;
    }
    return produto;
  });

  res.send(editarProduto);
});

app.delete("/produtos/:id", (req: Request, res: Response) => {
  const id = req.params.id;

  for (let i = 0; i < produtos.length; i++) {
    if (produtos[i].id === id) {
      produtos.splice(i, 1);
    }
  }

  res.send(produtos);
});
