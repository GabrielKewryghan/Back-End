function soma(n1, n2) {
    if (isNaN(n1) || isNaN(n2)) {
        alert("Erro: Um dos valores inseridos não é um número.");
    } else {
        alert(`O resultado da soma é: ${n1 + n2}`);
    }
}

function sub(n1, n2) {
    if (isNaN(n1) || isNaN(n2)) {
        alert("Erro: Um dos valores inseridos não é um número.");
    } else {
        alert(`O resultado da subtração é: ${n1 - n2}`);
    }
}

function multi(n1, n2) {
    if (isNaN(n1) || isNaN(n2)) {
        alert("Erro: Um dos valores inseridos não é um número.");
    } else {
        alert(`O resultado da multiplicação é: ${n1 * n2}`);
    }
}

function div(n1, n2) {
    if (isNaN(n1) || isNaN(n2)) {
        alert("Erro: Um dos valores inseridos não é um número.");
    } else if (n2 === 0) {
        alert("Erro: Divisão por zero não é permitida.");
    } else {
        alert(`O resultado da divisão é: ${n1 / n2}`);
    }
}

function numbers() {
    let n1 = Number(prompt("Digite o primeiro número:"));
    let n2 = Number(prompt("Digite o segundo número:"));
    return [n1, n2];
}

let active = true;

while (active) {
    let response = prompt("Digite a operação desejada:\n1 - Somar\n2 - Multiplicar\n3 - Dividir\n4 - Subtrair\n5 - Sair");

    if (!response) continue;

    let option = response.trim().toLowerCase();

    if (option === "1" || option === "somar" || option === "soma") {
        let [n1, n2] = numbers();
        soma(n1, n2);
    } else if (option === "2" || option === "multiplicar" || option === "multiplicação") {
        let [n1, n2] = numbers();
        multi(n1, n2);
    } else if (option === "3" || option === "dividir" || option === "divisão") {
        let [n1, n2] = numbers();
        div(n1, n2);
    } else if (option === "4" || option === "subtrair" || option === "subtração") {
        let [n1, n2] = numbers();
        sub(n1, n2);
    } else if (option === "5" || option === "sair") {
        alert("Até logo!");
        active = false;
    } else {
        alert("Opção inválida. Tente novamente.");
    }
}