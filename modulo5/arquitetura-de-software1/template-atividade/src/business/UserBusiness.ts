import { UserDataBase } from "../data/UserDataBase";
import { User } from "../types/User";

export class UserBusiness {
  createUser = async (input: any): Promise<void> => {
    try {
      const { name, email, password } = input;

      if (!name || !email || !password) {
        throw new Error('Preencha os campos "name", "email" e "password"');
      }

      const id: string = Date.now().toString();

      const userDataBase = new UserDataBase();

      await userDataBase.insertUser({
        id,
        name,
        email,
        password,
      });
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  findUser = async (): Promise<User[]> => {
    return await new UserDataBase().findUser();
  };

  deleteUser = async (input: { id: string }) => {
    if (!input.id) {
      throw new Error("Insira um id para deletar");
    }

    return await new UserDataBase().deleteUser(input.id);
  };
}
