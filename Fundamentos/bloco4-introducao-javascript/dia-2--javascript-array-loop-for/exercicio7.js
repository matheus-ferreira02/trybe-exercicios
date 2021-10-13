let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNum = undefined;

for (let indice = 0; indice < numbers.length; indice += 1) {
    if (indice == 0) {
        console.log("Como " + numbers[indice] + " é o primeiro item da lista, ele é o menor")
        menorNum = numbers[indice];
    } else if (numbers[indice] < menorNum) {
        console.log(numbers[indice] + " é menor que " + menorNum);
        menorNum = numbers[indice];        
    } else {
        console.log(numbers[indice] + " é maior que " + menorNum);
    }
}

console.log("O menor número da lista é: " + menorNum);