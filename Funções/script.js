// Atividade 01: Lê dois números e mostra a soma
function atividade01() {
    let n1 = Number(prompt("Digite o primeiro número:"));
    let n2 = Number(prompt("Digite o segundo número:"));
    alert("A soma é: " + (n1 + n2));
}

// Atividade 02: Verifica se o número é positivo ou negativo
function atividade02() {
    let n = Number(prompt("Digite um número:"));
    alert(n >= 0 ? "Número positivo" : "Número negativo");
}

// Atividade 03: Mostra nome e idade formatados
function atividade03() {
    let nome = prompt("Digite o nome:");
    let idade = prompt("Digite a idade:");
    alert(`${nome} tem ${idade} anos`);
}

// Atividade 04: Mostra o dobro, triplo e raiz quadrada de um número
function atividade04() {
    let n = Number(prompt("Digite um número:"));
    alert(`Dobro: ${n * 2}\nTriplo: ${n * 3}\nRaiz quadrada: ${Math.sqrt(n)}`);
}

// Atividade 05: Converte Celsius para Fahrenheit
function atividade05() {
    let celsius = Number(prompt("Digite a temperatura em Celsius:"));
    let fahrenheit = (celsius * 9 / 5) + 32;
    alert(`Temperatura em Fahrenheit: ${fahrenheit.toFixed(2)}`);
}

// Atividade 06: Mostra o maior entre dois números
function atividade06() {
    let n1 = Number(prompt("Digite o primeiro número:"));
    let n2 = Number(prompt("Digite o segundo número:"));
    alert(`O maior número é: ${n1 > n2 ? n1 : n2}`);
}

// Atividade 07: Verifica se o número é par ou ímpar
function atividade07() {
    let n = Number(prompt("Digite um número:"));
    alert(n % 2 === 0 ? "Número par" : "Número ímpar");
}

// Atividade 08: Mostra o menor entre três números
function atividade08() {
    let n1 = Number(prompt("Digite o primeiro número:"));
    let n2 = Number(prompt("Digite o segundo número:"));
    let n3 = Number(prompt("Digite o terceiro número:"));
    let menor = Math.min(n1, n2, n3);
    alert(`O menor número é: ${menor}`);
}

// Atividade 09: Verifica se a nota é suficiente para aprovação
function atividade09() {
    let nota = Number(prompt("Digite a nota do aluno:"));
    alert(nota >= 6 ? "Aprovado" : "Reprovado");
}

// Atividade 10: Lê 10 números e conta quantos são pares
function atividade10() {
    let pares = 0;
    for (let i = 0; i < 10; i++) {
        let n = Number(prompt(`Digite o ${i + 1}º número:`));
        if (n % 2 === 0) pares++;
    }
    alert(`Quantidade de números pares: ${pares}`);
}

// Atividade 11: Mostra a tabuada de um número de 1 a 10
function atividade11() {
    let n = Number(prompt("Digite um número para ver a tabuada:"));
    let resultado = "";
    for (let i = 1; i <= 10; i++) {
        resultado += `${n} x ${i} = ${n * i}\n`;
    }
    alert(resultado);
}

// Atividade 13: Soma todos os números de 1 a 100
function atividade13() {
    let soma = 0;
    for (let i = 1; i <= 100; i++) {
        soma += i;
    }
    alert(`A soma dos números de 1 a 100 é: ${soma}`);
}

// Atividade 15: Soma números digitados até o usuário digitar 0
function atividade15() {
    let soma = 0;
    while (true) {
        let n = Number(prompt("Digite um número (0 para parar):"));
        if (n === 0) break;
        soma += n;
    }
    alert(`A soma total é: ${soma}`);
}

// Atividade 16: Lê 5 números e mostra o maior
function atividade16() {
    let numeros = [];
    for (let i = 0; i < 5; i++) {
        let n = Number(prompt(`Digite o ${i + 1}º número:`));
        numeros.push(n);
    }
    let maior = Math.max(...numeros); // usa spread para pegar o maior
    alert(`O maior número digitado é: ${maior}`);
}

// Atividade 17: Lê 10 nomes e mostra na ordem inversa
function atividade17() {
    let nomes = [];
    for (let i = 0; i < 10; i++) {
        let nome = prompt(`Digite o ${i + 1}º nome:`);
        nomes.push(nome);
    }
    nomes.reverse(); // inverte o array
    alert("Nomes em ordem inversa:\n" + nomes.join("\n"));
}

// Variável de controle para o menu principal
let ativo = true;

while (ativo) {
    // Exibe o menu com as opções de atividades
    let escolha = prompt(
        "Escolha a atividade para executar (01 a 17, exceto 12 e 14):\n" +
        "1 - Soma de dois números\n" +
        "2 - Verificar se número é positivo/negativo\n" +
        "3 - Nome e idade\n" +
        "4 - Dobro, triplo e raiz\n" +
        "5 - Celsius para Fahrenheit\n" +
        "6 - Maior entre dois números\n" +
        "7 - Par ou ímpar\n" +
        "8 - Menor entre três números\n" +
        "9 - Aprovado ou reprovado\n" +
        "10 - Contar pares entre 10 números\n" +
        "11 - Tabuada\n" +
        "13 - Somar de 1 até 100\n" +
        "15 - Ler até 0 e somar\n" +
        "16 - Maior entre 5 números\n" +
        "17 - Nomes em ordem inversa\n" +
        "0 - Sair"
    );

    // Executa a função correspondente com base na escolha do usuário
    switch (escolha) {
        case "1": atividade01(); break;
        case "2": atividade02(); break;
        case "3": atividade03(); break;
        case "4": atividade04(); break;
        case "5": atividade05(); break;
        case "6": atividade06(); break;
        case "7": atividade07(); break;
        case "8": atividade08(); break;
        case "9": atividade09(); break;
        case "10": atividade10(); break;
        case "11": atividade11(); break;
        case "13": atividade13(); break;
        case "15": atividade15(); break;
        case "16": atividade16(); break;
        case "17": atividade17(); break;
        case "0":
            alert("Terminado!");
            ativo = false;
            break;
        default:
            alert("Opção inválida");
    }
}