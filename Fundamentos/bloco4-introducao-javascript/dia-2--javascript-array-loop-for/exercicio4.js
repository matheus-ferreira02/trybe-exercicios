let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let sum = 0;

for (let number of numbers) {
    sum += number;
}

console.log("A soma dos valores é " + sum);
console.log("A média dos valores é " + sum / numbers.length);

if (sum / numbers.length > 20 ) {
    console.log("A média é um valor maior que 20");
} else {
    console.log("A média é um valor menor que 20");
}
