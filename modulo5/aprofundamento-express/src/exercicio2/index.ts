import express, { Request, Response } from "express";
import cors from "cors";
import { toDoList } from "./data";

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

app.post("/add")
