const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

// escreva filterPeople abaixo

const filterPeople = (obj) => {
  obj.forEach((person) => {
    const {nationality, name, bornIn} = person;
    if (nationality === 'Australian' && bornIn < 2000) {
      console.log(`${name}, é australiano(a) e nasceu no século 20.`);
    }
  })
}

filterPeople(people)