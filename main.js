// let roman = {
//   name: 'Roman',
//   hair: 'black',
//   greeting: function () {
//     document.write(`Hello, my name is ${this.name}`)
//   },

//   coding: function (hours = 8) {
//     document.write(`I will code ${hours} hours`)
//   },

//   thisFunction: function () {
//     console.log('thisFunction', this);
//   },

//   thisArrowFunction: () => {
//     console.log('thisArrowFunction', this);
//   },

//   job: {
//     title: 'junior',

//     goWorkArrow: () => {
//       console.log('job arrow', this);
//     },

//     goWork: function () {
//       console.log('job simple', this);
//     }
//   }
// }

// roman.greeting();

// roman.coding(24);

// roman.thisFunction();

// roman.thisArrowFunction();

// roman.job.goWorkArrow();

// roman.job.goWork();




// ________________________ C O N S T R U C T O R ____________________________________


// function Car(name, color, speed) {
//   this.color = color,
//   this.speed = speed,
//   this.name = name,

//   this.drive = function () {
//     document.write(`Im driving ${this.speed} km/h <br/>`)
//   }
// }

// const volvo = new Car('volvo', 'red', 40);
// const bmw = new Car('bmw', 'green', 40);
// const mercedes = new Car('mercedes', 'blue', 156);
// const audi = new Car('audi', 'gray', 220);

// console.log(volvo);
// console.log(bmw);
// console.log(mercedes);
// console.log(audi);

// audi.drive();
// bmw.drive();
// volvo.drive();
// mercedes.drive();

// let laptopArr = ['Sams', 'Mac'];

// function User(age, gender) {
//   this.gender = gender;
//   this.age = age;
// this.education = 'high';
// this.laptops = [];

// this.addLaptop = function (laptopName) {
//   this.laptops.push(laptopName)
//  }
// }

// let roman = new User(32, 'male');

// roman.laptops = ['Acer', 'HP'];

// roman.laptops = laptopArr;

// roman.addLaptop('Dell');

// console.log(roman);
// 
// 
// 

// _______________________ P U R E   C L A S S _____________________________


// class Human {
//   constructor(age, gender, color) {
//     this.age = age;
//     this.gender = gender;
//     this.color = color;
//     this.money = 0;
//   }

//   eat() {
//     document.write('is eating');
//   }

//   goWork() {
//     this.money += 100;
//   }

//   goBeer() {
//     if (this.money > 200) {
//       document.write('I am drunk');
//       this.money -= 200;
//     } else {
//       document.write('No money - no honey');
//     }
//   }
// }

// let Roman = new Human(32, 'male', 'white');

// console.log(Roman);

// Roman.goBeer();
// Roman.goWork();
// Roman.goWork();
// Roman.goWork();
// Roman.goWork();

// console.log(Roman);

// Roman.goBeer();

// console.log(Roman);
// 
// 
// 

// _______________________ E X T E N D S _________________________


// class Developer extends Human {
//   constructor(age, gender, color, skill) {
//     super(age, gender, color);
//     this.skill = skill;
//   };

//   goWork() {
//     this.money += 500;
//   }

//   goBeer() {
//     if (this.money < 500) {
//       document.write('hire me');
//     } else {
//       document.write('go');
//     }
//   }
// }

// let Roman = new Developer(32, 'male', 'white', 'node.js');

// Roman.goWork();
// Roman.goWork();
// Roman.goWork();
// Roman.goWork();
// Roman.goWork();
// Roman.goWork();
// Roman.goWork();

// Roman.goBeer();

// console.log(Roman);
// 
// 

// _______________________ P R O T O   A R R A Y   M E T H O D S _________________________
// 
// 
// let numbers = [1, 6, 9, 0, 22, 29];



// ___ S O R T __________


// let sorted = numbers.sort((a, b) => {
//   return a - b;
// });

// console.log(sorted);


// ___ F I L T E R __________


// numbers.filter((value, index, array) => {
//   console.log(value);
//   console.log(index);
//   console.log(array);
//   console.log('__________');
// })

// let filtered_1 = numbers.filter((value, index) => {
//   return value % 2 === 0
// });

// let filtered_1 = numbers.filter(value => !(value % 2));

// console.log(filtered_1);


// ___ M A P __________


// let mapped = numbers.map((value, index) => {
//   if (!(value % 2)) {
//     return value * 2
//   }

//   return value
// });

// console.log(mapped);

let names = ['Roman', 'Dima', 'Sergaio', 'Igoar', 'Andrew'];

// let namesId = names.map((name, id, names) => {
//   return {
//     name,
//     id: id + 1,
//     address: 'Lviv',
//     arrNames: names[id]
//   }
// });

// console.log(namesId);


// ___ F O R   E A C H __________


// numbers.forEach((value, index, array) => {
//   if(!(value % 2)) {
//     return
//   }
//   console.log(value);
// })


// ___ F I N D __________


// let finded = names.find(value => {
//   return value.toLowerCase().startsWith('s');
// });

// console.log(finded);


// ___ F I N D   I N D E X __________


// let findedIndex = names.findIndex(value => {
//   return value.toLowerCase().startsWith('a');
// });

// console.log(findedIndex);


// ___ J O I N __________

// let joined = names.join('_');

// console.log(joined);


// ___ I N C L U D E S __________


// let included = names.includes('Roman');

// console.log(included);


// ___ S O M E  /  E V E R Y __________


// let some = names.some(value => {
//   return value.toLowerCase().startsWith('r');
// });

// console.log(some);


// let every = names.every(value => {
//   return value.toLowerCase().includes('b');
// });

// console.log(every);



// ______ F L A T _______________________


// let arrInArr = [1, 2, 5, 4, [8, 9, 5, 15, [5, 9, 7, [5, 8, 12], 8], [8, 9, 2, [58, 45, 6, [14, 25, 10]], 25, 12, 2], 25, 2]];

// let flat = arrInArr.flat(3);

// console.log(flat);


// ______ R E D U C E _______________________


// let numbers = [1, 6, 9, 0, 22, 29];

// let reduced = numbers.reduce((prev, curr) => {
//   console.log(prev);
//   console.log(curr);
//   console.log('____________');

//   return prev + curr;
// }, 0);

// console.log(reduced);



// _________ P R O T O T Y P E    E X T E N D S _________________



// function Animal(name, color) {
//   this.name = name;
//   this.color = color;

//   // this.run = function () {
//   //   console.log('running');
//   // }
// };

// Animal.prototype.run = function () {
//   console.log(this.name + ' running');
// };


// function Hamster(name, color, house) {
//   this.name = name;
//   this.color = color;
//   this.house = house;
// };

// // Hamster.prototype.__proto__ = Animal.prototype;

// Hamster.prototype = Object.create(Animal.prototype);

// let zebra = new Animal('Zebra', 'red');
// let bobra = new Animal('bobra', 'blue');
// let kibra = new Animal('kibra', 'white');

// let hamster = new Hamster('Hamster', 'white', true);

// zebra.run();
// bobra.run();
// kibra.run();

// hamster.run();

// Hamster.prototype.run = function () {
//   console.log('Hello');
// }


function Hamster(name) {
  this.name = name;
  this.stomach = []
}

// Hamster.prototype.stomach = [];

Hamster.prototype.findFood = function (food) {
  this.stomach.push(food)
}

let Master = new Hamster('Master');
let Yoda = new Hamster('Yoda');

console.log(Master.stomach);
console.log(Yoda.stomach);

Master.findFood('Apple');
Yoda.findFood('Light saber');

console.log(Master.stomach);
console.log(Yoda.stomach);
