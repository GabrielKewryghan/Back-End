let usuarios = [];
let opcao = "";

while (opcao !== "3") {
  opcao = prompt(
    "Menu Principal:\n1 - Entrar\n2 - Cadastrar\n3 - Sair"
  );

  if (opcao === "1") {
    if (usuarios.length === 0) {
      alert("Nenhum usuário cadastrado. Faça o cadastro primeiro.");
      continue;
    }

    let nome = prompt("Digite seu nome de usuário:");
    let senha = prompt("Digite sua senha:");

    let usuarioEncontrado = usuarios.find(
      (user) => user.name === nome && user.password === senha
    );

    if (usuarioEncontrado) {
      alert("Bem-vindo(a), " + nome + "!");
    } else {
      alert("Usuário ou senha incorretos!");
    }

  } else if (opcao === "2") {
    let nome = prompt("Digite um nome de usuário:");
    let senha = prompt("Digite uma senha:");

    if (!nome || !senha) {
      alert("Nome de usuário e senha não podem ser vazios.");
    } else {
      usuarios.push({ name: nome, password: senha });
      alert("Cadastro realizado com sucesso!");
    }

  } else if (opcao === "3") {
    alert("Até logo!");
  } else {
    alert("Opção inválida. Tente novamente.");
  }
}