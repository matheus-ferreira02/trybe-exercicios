enum sizeDog {
  Small = 'Small',
  Medium = 'Medium',
  Bigger = 'Bigger',
}

interface Dog {
  name: string,
  breed: string,
  age: number,
  size: sizeDog
}

class Dog {  
  constructor(name: string, breed: string, age: number, size: sizeDog) {
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.size = size;
  }
};
