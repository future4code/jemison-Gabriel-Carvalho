export type Usuario = {
  id: number;
  name: string;
  email: string;
  type: CONTA;
  age: number;
};

export enum CONTA {
  ADMIN = "admin",
  NORMAL = "normal",
}
