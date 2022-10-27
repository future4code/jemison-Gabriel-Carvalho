export type Usuario = {
  id: number;
  name: string;
  phone: number;
  email: string;
  website: string;
};

export type Posts = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
