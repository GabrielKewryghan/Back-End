// Controla o estado do sistema (se o programa ainda está rodando ou não)
let active = true

// Objeto para armazenar os dados do usuário cadastrado
let cadastrado = {
    nome: "",
    senha: ""
}

// Objeto para armazenar os dados do usuário logado
let login = {
    nome: "",
    senha: ""
}

// Função de soma
function soma(n1, n2) {
    let resultado
    if (isNaN(n1) || isNaN(n2)) {  // Verifica se os valores são números
        alert("Digite um numero!!")
    }
    else {
        resultado = n1 + n2
        alert(`O Resultado da operação matematica é: ${resultado}`)
    }
}

// Função de multiplicação
function multi(n1, n2) {
    let resultado
    if (isNaN(n1) || isNaN(n2)) {
        alert("Digite um numero!!")
    } else {
        resultado = n1 * n2
        alert(`O Resultado da operação matematica é: ${resultado}`)
    }
}

// Função de subtração
function sub(n1, n2) {
    let resultado
    if (isNaN(n1) || isNaN(n2)) {
        alert("Digite um numero!!")
    } else {
        resultado = n1 - n2
        alert(`O Resultado da operação matematica é: ${resultado}`)
    }
}

// Função de divisão
function div(n1, n2) {
    let resultado
    if (isNaN(n1) || isNaN(n2)) {
        alert("Digite um numero!!")
    } else {
        resultado = n1 / n2
        alert(`O Resultado da operação matematica é: ${resultado}`)
    }
}

// Função que pede dois números ao usuário e os retorna como array
function numbers() {
    let n1 = Number(prompt("Digite o primeiro numero:"))
    let n2 = Number(prompt("Digite o segundo numero:"))
    return [n1, n2]
}

while (active) {
    // Verifica se o usuário está logado
    if (login.nome != "" && login.senha != "") {
        // Usuário logado — mostra o menu de operações
        let resposta = prompt(`Seja bem vindo ${login.nome}, o que quer fazer em nosso sistema?\n1 - Somar\n 2 - Multiplicar\n3 - Dividir\n 4 - Subtrair\n 5 - Deslogar`)

        // Verifica qual operação o usuário deseja fazer
        if (resposta == "soma" || resposta == 1) {
            let [n1, n2] = numbers()
            soma(n1, n2)
        }
        else if (resposta == "multiplicar" || resposta == 2) {
            let [n1, n2] = numbers()
            multi(n1, n2)
        }
        else if (resposta == "dividir" || resposta == 3) {
            let [n1, n2] = numbers()
            div(n1, n2)
        }
        else if (resposta == "subtrair" || resposta == 4) {
            let [n1, n2] = numbers()
            sub(n1, n2)
        }
        else if (resposta == "deslogar" || resposta == 5){
            // Desloga o usuário
            alert("Ate logo " + login.nome)
            login.nome = ""
            login.senha = ""
        }
        else {
            alert("Essa opção não esta presente em nosso sistema!")
        }
    }
    else {
        // Usuário não está logado — mostra o menu inicial
        let resposta = prompt("Bem vindo caro usuario, o que quer fazer em nosso sistema?\n1 - Cadastrar \n2 - Entrar\n 3 - Sair")

        // Cadastro de novo usuário
        if (resposta == "cadastrar" || resposta == 1) {
            let nome = prompt("Digite seu nome: ")
            if (nome != "") {
                let senha = prompt("Digite sua senha: ")
                if (senha != "") {
                    // Salva os dados no "banco de dados" local (objeto)
                    cadastrado.nome = nome;
                    cadastrado.senha = senha
                    alert("Usuario cadastrado, bem vindo " + cadastrado.nome)
                } else {
                    alert("Digite algo no campo !!")
                }
            }
            else {
                alert("Digite algo no campo !!")
            }
        }

        // Login de usuário existente
        else if (resposta == "entrar" || resposta == 2) {
            // Verifica se existe alguém cadastrado
            if (cadastrado.nome != "" && cadastrado.senha != "") {
                let nome = prompt("Digite seu nome: ")
                if (nome == cadastrado.nome) {
                    let senha = prompt("Digite sua senha: ")
                    if (senha == cadastrado.senha) {
                        // Login com sucesso
                        login.nome = nome
                        login.senha = senha
                    } else {
                        alert("Senha incorreta, tente novamente!!")
                    }
                } else {
                    alert("Nome não presente no meu banco de dados!!")
                }
            }
            else {
                alert("Nenhum usuario cadastrado em nosso banco!!")
            }
        }

        // Sair do sistema
        else if (resposta == "sair" || resposta == 3) {
            alert("Ate logo meu chapa!!")
            active = false;
        }

        // Opção inválida
        else {
            alert("Essa opção não esta presente em nosso sistema!")
        }
    }
}