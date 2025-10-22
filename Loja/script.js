const cliente = { nome: "João", cpf: "12345678900", saldo: 150 };
const produtos = [
  { nome: "Teclado", preco: 100 },
  { nome: "Mouse", preco: 50 },
  { nome: "Monitor", preco: 500 },
  { nome: "Headset", preco: 80 }
];

let cpf = prompt("Digite seu CPF:");

if (cpf === cliente.cpf) {
  alert("Login feito com sucesso, " + cliente.nome);

  let escolha = "";

  while (escolha !== "3") {
    escolha = prompt("Escolha uma opção:\n1 - Comprar\n2 - Ver saldo\n3 - Sair");

    switch (escolha) {
      case "1":
        let nomeProduto = prompt("Qual produto deseja comprar?\n\nTeclado R$100 \nMouse R$50 \nMonitor R$500 \nHeadset R$80");
        let produto = 0;

        for (let i = 0; i < produtos.length; i++) {
          if (produtos[i].nome.toLowerCase() === nomeProduto.toLowerCase()) {
            produto = produtos[i];
            break;
          }
        }

        if (cliente.saldo >= produto.preco) {
          cliente.saldo -= produto.preco;
          alert("Parabéns pela compra do " + produto.nome + "!\nSaldo restante: R$" + cliente.saldo);
        } else {
          alert("Saldo insuficiente.");
        }
        break;

      case "2":
        alert("Seu saldo é R$" + cliente.saldo);
        break;

      case "3":
        alert("Obrigado por usar a loja!");
        break;

      default:
        alert("Opção inválida.");
    }
  }
} else {
  alert("CPF incorreto. Acesso negado.");
}