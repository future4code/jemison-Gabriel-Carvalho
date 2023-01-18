import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

export class UserController {
  createUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const input: any = {
        id: req.body.id,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      };

      const userBusiness = new UserBusiness();

      await userBusiness.createUser(input);

      res.status(201).send({ message: "Usuário criado!" });
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  findUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const users = await new UserBusiness().findUser();

      res.send(users).status(200);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}
