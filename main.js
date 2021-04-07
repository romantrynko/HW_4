
const roman = {
  name: 'Roman',
  age: 32,
  salary: 150000,
  position: 'Senior'
};

const nazar = {
  name: 'Nazar',
  age: 28,
  salary: 150000,
  position: 'Senior'
};

const veronika = {
  name: 'Veronika',
  age: 1,
  salary: 120000,
  position: 'Junior'
};

function sayHello() {
  console.log(this.name + ' say hello');
  console.log(this);
};

sayHello();


sayHello.call(roman);
sayHello.apply(nazar);
let verSayHello = sayHello.bind(veronika);

verSayHello();

function changePayment(changeRate, newPos) {
  this.salary += changeRate;
  this.position = newPos;
};

changePayment.call(veronika, 100000, 'CEO');
console.log(veronika);

changePayment.apply(roman, [150000, 'CEO']);
console.log(roman);

let getMoneyForNazar = changePayment.bind(nazar, 200000, 'CEO');
getMoneyForNazar();
getMoneyForNazar();
getMoneyForNazar();
getMoneyForNazar();

console.log(nazar);
