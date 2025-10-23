let lista = [1,2,3,4,5,6,7,8,9,10];
console.log(lista);
let listaDobrada = lista.map(elemento => elemento * 2);
console.log(listaDobrada);

let listaPar = lista.filter(elemento => elemento % 2 == 0);
console.log(listaPar);

let listaMaiorCinco = lista.filter(elemento => elemento > 5);
console.log(listaMaiorCinco);

let listaEncontrada = lista.find(elemento => elemento > 1);
console.log(listaEncontrada);

lista.forEach(elemento => {
    console.log(elemento * 2);
})

let usuarios = [
    {
        nome: "gabriel kewryghan",
        idade: 20
    },
    {
        nome: "zeca",
        idade: 800
    },
    {
        nome: "jorge",
        idade: 13
    }
]

let nomes = usuarios.map(elemento => elemento.nome);
let idades = usuarios.map(elemento => elemento.idade);
console.log(`nomes: ${nomes}`);
console.log(`idades: ${idades}`);

usuarios.forEach(elemento => {
    console.log(`nomes: ${elemento.nome}`);
console.log(`idades: ${elemento.idade}`);
})


let usuarios2 = [
    {
        nome: "gabriel kewryghan",
        idade: 20,
        genero: "masculino"
    },
    {
        nome: "zeca",
        idade: 800,
        genero: "tartaruga"
    },
    {
        nome: "amanda",
        idade: 13,
        genero: "feminino"
    },
    {
        nome: "Sam",
        idade: 19,
        genero: "feminino"
    },
    {
        nome: "Felipe",
        idade: 17,
        genero: "masculino"
    },
    {
        nome: "Luis",
        idade: 9,
        genero: "masculino"
    },
    {
        nome: "Caleb",
        idade: 15,
        genero: "masculino"
    },
    {
        nome: "Jennif",
        idade: 18,
        genero: "feminino"
    },
    {
        nome: "Mateus",
        idade: 18,
        genero: "masculino"
    },
    {
        nome: "Joao",
        idade: 25,
        genero: "masculino"
    }
]

let listaMasc = usuarios2.filter(elemento => elemento.genero == "masculino");
console.log(listaMasc);
let listaFemi = usuarios2.filter(elemento => elemento.genero == "feminino");
console.log(listaFemi);


console.log("\nMasculinos:\n")
listaMasc.forEach(elemento => {
    console.log(`nomes: ${elemento.nome}`);
    console.log(`idades: ${elemento.idade}`);
    console.log(`genero: ${elemento.genero}`);
})
console.log("\nFemininos:\n")
listaFemi.forEach(elemento => {
    console.log(`nomes: ${elemento.nome}`);
    console.log(`idades: ${elemento.idade}`);
    console.log(`genero: ${elemento.genero}`);
})