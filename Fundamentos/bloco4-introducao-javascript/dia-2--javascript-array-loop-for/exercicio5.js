let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNum = 0;

for (let number of numbers) {
    if (number > maiorNum) {
        console.log(number + " é maior que " + maiorNum);
        maiorNum = number;        
    } else {
        console.log(number + " é menor que " + maiorNum);
    }
}

console.log("O maior número da lista é: " + maiorNum);