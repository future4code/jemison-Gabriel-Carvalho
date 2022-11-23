import express, { Response, Request } from "express";
import { connection } from "../dataBase/connection";

export const getAllUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  const nome = req.query.nome;

  try {
    const users = await selectAllUsers();

    if (!users.length) {
      res.statusCode = 404;
      throw new Error("No user found");
    }

    res.status(200).send(users);
  } catch (error: any) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};

export default async function selectAllUsers(): Promise<any> {
  const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio;
    `);

  return result[0];
}
