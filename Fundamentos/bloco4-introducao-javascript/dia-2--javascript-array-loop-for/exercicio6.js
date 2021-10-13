let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let contImpar = 0;

for (let number of numbers) {
    if (number % 2 === 1) {
        console.log(number + " é um número ímpar")
        contImpar += 1;
    } else {
        console.log(number + " é um número par")
    }
}

if (contImpar > 0) {
    console.log("Existem " + contImpar + " valores impares na lista");
} else {
    consol.log("Nenhum valor ímpar encontrado")
}