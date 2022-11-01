import express, { Request, Response } from "express";
import cors from "cors";
import { toDoList } from "./data";
import { send } from "process";
import { ToDo } from "./type";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});

app.get("/chore", (req: Request, res: Response) => {
  const ToDoListChore = toDoList.filter((chore) => {
    return chore.completed === true;
  });

  res.status(200).send(ToDoListChore);
});

app.post("/addchore"),
  (req: Request, res: Response) => {
    const { userId, id, title, completed }: ToDo = req.body;

    const newChore = { userId, id, title, completed };
    toDoList.push(newChore);

    const newList = { ...toDoList, newChore };

    console.log(newList);

    res.status(200).send(newList);
  };

app.get("/allchore", (req: Request, res: Response) => {
  const allchore = toDoList.map((list) => {
    return list;
  });

  res.status(200).send(allchore);
});
