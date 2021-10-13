let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNum = 0;

for (indice = 0; indice < numbers.length; indice += 1) {
    if (numbers[indice] > maiorNum) {
        console.log(numbers[indice] + " é maior que " + maiorNum);
        maiorNum = numbers[indice];        
    } else {
        console.log(numbers[indice] + " é menor que " + maiorNum);
    }
}

console.log("O maior número da lista é: " + maiorNum);