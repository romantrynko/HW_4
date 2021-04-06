const roman = {
  name: 'Roman',
  age: 32,
  cars: ['Honda', 'BMW'],
  wife: {
    name: 'Khrystyna',
    age: 25,
  }
}

const { cars: [, beha]} = roman;

console.log(beha);



