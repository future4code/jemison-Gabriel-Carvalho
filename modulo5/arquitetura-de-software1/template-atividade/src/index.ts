import { app } from "./app";
import { UserController } from "./controller/UserController";
import { UserDataBase } from "./data/UserDataBase";

const userController = new UserController();

app.get("/", async function () {
  console.log("endpoint teste");
});

app.post("/user", userController.createUser);

app.get("/user", userController.findUser);

app.delete(":id", userController.deleteUser);
