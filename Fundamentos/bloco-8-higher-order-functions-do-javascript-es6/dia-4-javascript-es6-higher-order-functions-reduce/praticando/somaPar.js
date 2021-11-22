const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumPairs = (acc, number) => number % 2 === 0 ? acc + number : acc;

console.log(`Usando apenas .reduce(): `, numbers.reduce(sumPairs, 0));

const getPair = number => number % 2 === 0;

const sumNumbers = (acc, number) => acc + number;

const pairNumbers = numbers.filter(getPair);
console.log(`Usando .filter() e .reduce(): `, pairNumbers.reduce(sumNumbers));