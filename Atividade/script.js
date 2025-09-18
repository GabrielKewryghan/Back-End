let num1 = "";
let num2 = "";
let opcao = "";

while (opcao !== "5") {
  opcao = prompt(
    "Menu Principal:\n1 - Somar\n2 - Subtrair\n3 - Dividir\n4 - Multiplicar\n5 - Sair"
  );

  if (opcao === "1") {
    num1 = prompt("Digite o primeiro numero:");
    num2 = prompt("Digite o segundo numero:");
    
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    alert("Resultado da soma: " + (number1+number2));

  } else if (opcao === "2") {
    num1 = prompt("Digite o primeiro numero:");
    num2 = prompt("Digite o segundo numero:");
    
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    alert("Resultado da subtração: " + (number1-number2));

  } else if (opcao === "3") {
    num1 = prompt("Digite o primeiro numero:");
    num2 = prompt("Digite o segundo numero:");
    
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    alert("Resultado da divisão: " + (number1/number2));

  } else if (opcao === "4") {
    num1 = prompt("Digite o primeiro numero:");
    num2 = prompt("Digite o segundo numero:");
    
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    alert("Resultado da multiplicação: " + (number1*number2));

  } else if (opcao === "5") {
    alert("Até logo!");
  }else{
    alert("Numero Invalido")
  }
}