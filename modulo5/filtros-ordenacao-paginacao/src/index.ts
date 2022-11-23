import { app } from "./app";
import { getAllUsers } from "./endpoints";

app.get("/allusers", getAllUsers);
