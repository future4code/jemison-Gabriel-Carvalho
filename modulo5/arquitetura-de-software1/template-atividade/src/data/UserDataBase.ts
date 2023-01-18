import { BaseDatabase } from "./BaseDatabase";
import { User } from "../types/User";

export class UserDataBase extends BaseDatabase {
  insertUser = async (user: User): Promise<void> => {
    try {
      await UserDataBase.connection
        .insert({
          id: user.id,
          name: user.name,
          email: user.email,
          password: user.password,
        })
        .into("User_Arq");
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  findUser = async () => {
    try {
      const users: User[] = [];

      const result = await UserDataBase.connection()
        .select("*")
        .from("User_Arq");

      for (let user of result) {
        users.push(user);
      }

      return users;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  public deleteUser = async (id: string): Promise<void> => {
    try {
      await UserDataBase.connection().where({ id }).from("User_Arq").delete();
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };
}
