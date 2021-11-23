// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'qiwi', 'morango'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite condensado', 'creme de leite', 'leite em pó'];

const fruitSalad = (fruit, additional) => [...fruit, ...additional];

console.log(fruitSalad(specialFruit, additionalItens));