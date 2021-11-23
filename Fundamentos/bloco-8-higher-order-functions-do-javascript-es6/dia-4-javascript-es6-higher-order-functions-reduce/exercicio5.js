const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerca', 'Adieidy', 'Alarucha',
];

/* function containsA() {
  return names.reduce((accLetraA, nome) => 
    accLetraA += nome.split('').reduce((accLetra, letra) =>
      accLetra += letra === 'a' || letra === 'A' ? 1 : 0), 0), 0
} */

/* function containsA() {
  return names.reduce((accLetraA, nome)=> {
    return accLetraA += nome.split('').reduce((acc, letra)=> {
      return acc += letra.toLowerCase() === 'a' ? 1 : 0;
    }, 0);
  }, 0);
} */

function containsA() {
  return names.reduce((accLetraA, nome) => (accLetraA += nome.split('').reduce((acc, letra) => (acc += letra === 'a' || letra === 'A' ? 1 : 0), 0)), 0);
}

/* function containsA() {
  return names.reduce(
    (accLetraA, nome) =>
      (accLetraA += nome
        .split('')
        .reduce((acc, letra) => (acc += letra === 'a' || letra === 'A' ? 1 : 0), 0)),
    0
  );
} */

console.log(containsA());