let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//algoritimo:
//- criar variavel que ira somar cada item
//- criar o laço de repetição
//- criar a variavel que recebe cada item
//- percorrer cada item da lista
//- somar o item na variavel
//- mostrar na tela a soma dos itens

let sum = 0;

for (let number of numbers) {
    sum += number;
}

console.log(sum);