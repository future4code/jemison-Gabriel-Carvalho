//sistema de login

const contas = [
  {
    email: "astrodev@labenu.com",
    password: "abc123",
  },
  {
    email: "gabriel123@gmail.com",
    password: "gabriel12",
  },
];

function verificarLogin(emailUser, senhaUser) {
  const verificarContas = { email: emailUser, password: senhaUser };

  let qtContas = 0;

  for (let i = 0; i < contas.length; i++) {
    if (
      verificarContas.email.includes("@") &&
      verificarContas.password.length >= 6
    ) {
      if (
        contas[qtContas].email === verificarContas.email &&
        contas[qtContas].password === verificarContas.password
      ) {
        console.log("Login efetuado com sucesso");
      }
    } else {
      console.log("falhou");
    }
    qtContas++;
  }
}

verificarLogin("astrodev@labenu.com", "abc123");
verificarLogin("gabriel123@gmail.com", "gabriel");
