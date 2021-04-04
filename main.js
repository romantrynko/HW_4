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


class Human {
  constructor(age, gender, color) {
    this.age = age;
    this.gender = gender;
    this.color = color;
    this.money = 0;
  }

  eat() {
    document.write('is eating');
  }

  goWork() {
    this.money += 100;
  }

  goBeer() {
    if(this.money > 200) {
      document.write('I am drunk');
      this.money -= 200;
    } else {
      document.write('No money - no honey');
    }
  }
}

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


class Developer extends Human {
  constructor(age, gender, color, skill) {
    super(age, gender, color);
    this.skill = skill;
  };

  goWork() {
    this.money += 500;
  }

  goBeer() {
    if (this.money < 500) {
      document.write('hire me');
    } else {
      document.write('go');
    }
  }
}

let Roman = new Developer(32, 'male', 'white', 'node.js');

Roman.goWork();
Roman.goWork();
Roman.goWork();
Roman.goWork();
Roman.goWork();
Roman.goWork();
Roman.goWork();

Roman.goBeer();

console.log(Roman);