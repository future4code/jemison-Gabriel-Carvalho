// Considerando o array de usuários abaixo,
//crie uma função que receba este array como parâmetro e retorne uma lista com apenas os emails dos usuários “admin”.

type Usuarios = {
  name: string;
  email: string;
  role: string;
};

enum Conta {
  USER = "user",
  ADMIN = "admin",
}

const dadosUsuarios: Usuarios[] = [
  { name: "Rogério", email: "roger@email.com", role: Conta.USER },
  { name: "Ademir", email: "ademir@email.com", role: Conta.ADMIN },
  { name: "Aline", email: "aline@email.com", role: Conta.USER },
  { name: "Jéssica", email: "jessica@email.com", role: Conta.USER },
  { name: "Adilson", email: "adilson@email.com", role: Conta.USER },
  { name: "Carina", email: "carina@email.com", role: Conta.ADMIN },
];

function retornaEmailAdmin(dados: Usuarios[]) {
  const contaAdm = dados
    .filter((admin) => {
      return admin.role === Conta.ADMIN;
    })
    .map((usuario) => {
      return usuario.email;
    });
  return contaAdm;
}

console.log(retornaEmailAdmin(dadosUsuarios));
