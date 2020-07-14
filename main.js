// 1 - створити функцію яка виводить масив

// function array (a) {
//     console.log(a);
// }
// array([]);


// 2 - створити функцію яка заповнює масив рандомними числами та виводить його. 
//     Для виведення використати попередню функцію.
// let arr = [];

// function rand () {
//     arr.push(100);
//     return arr;
// }
// // let arr2 = arr;
// rand ();

// function array (a) {
//     console.log(a);
// }
// array(arr);

// 3 - створити функцію яка приймає три числа та виводить та повертає найменьше.

// function minNumber (a, b, c) {
//     let minNum =  Math.min(a, b, c)
//     alert(minNum);
//     return minNum;
// }
// minNumber(10, 5, 7);



// 4 - створити функцію яка приймає три числа та виводить та повертає найбільше.

// function maxNumber (a, b, c) {
//     let maxNum = Math.max(a, b, c)
//     alert(maxNum);
//     return maxNum;
// }
// maxNumber(1010, 362, 5444);




// 5 - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше

// function minMax() {
//     let min = arguments[0];
//     let max = arguments[0];

//         for (let i = 0; i < arguments.length; i++) {
//             if (arguments[i] < min) {
//                 min = arguments[i]
//             }

//             if (arguments[i] > max) {
//                 max = arguments[i]
//             }
//         }
//     console.log(max + ' MAX');
//     return min;


// }
// console.log(min);

// minMax(2, 3, 5, 94, 6, 46, 8, 4, 45, 6, 48);


// 7 - створити функцію яка повертає найбільше число з масиву

// function returnMax() {
//     let max = arguments[0];
//     // let max = [0];
  
//     for (let i = 0; i < arguments.length; i++) {
//         if (max < arguments[i]) {
//             max = arguments[i]
//         }
//         //  else {
//         //     max = arguments[i + 1]
//         // }
//     }
//     return max;
  
//   }

// console.log(returnMax([5,25,35,45,66,2,1,0]));



// 8 - створити функцію яка повертає найменьше число з масиву





// 9 - - створити функцію 
//      яка приймає масив чисел 
//      та складає значення елементів масиву 
//      та повертає його.

// function numsArray (arr) {
//     let num = 0;
//     for (let i = 0; i < arr.length; i++){
//         num += arr[i]; 

//     }
//     return num;
// }

// console.log(numsArray([1, 23, 54, 67, 789, 23]));



// 10 - створити функцію яка приймає масив чисел 
//      та повертає середнє арифметичне його значень.

// function numsArray (arr) {
//         let num = 0;
//         for (let i = 0; i < arr.length; i++){
//             num = num + arr[i]; 
    
//         }

//         num = num / arr.length
//         return num;
//     }
    
//     console.log(numsArray([5, 10, 15, 20, 30, 40, 50]));



// 11 - Створити функцію яка приймає масив будь яких объектів, 
//      та повертає значення кількості об'єктів в масиві

// let arr = [
//     {name:'Roman', age: 31},
//     {name:'Dima', age: 20},
//     {name:'Vika', age: 25},
//     {name:'Nazar', age: 27}
// ]


// function arrayObj(a) {
//     let objCount = a.length;
//     return objCount;
// }

// arrayObj(arr);
// console.log(arrayObj(arr));



// 12 - Створити функцію яка приймає масив будь яких объектів, 
//      та повертає загальну кількість полів в них

// let arr = [
//         {name:'Roman', age: 31},
//         {name:'Dima', age: 20},
//         {name:'Vika', age: 25},
//         {name:'Nazar', age: 27},
//         {name:'Roman', age: 31},
//         {name:'Dima', age: 20},
//         {name:'Vika', age: 25},
//         {name:'Nazar', age: 27}
//     ]
    
    
//     function arrayObj(a) {
//         let keySum = 0;
//         for (let element of arr) {
//             for (let key in element) {
//                 keySum++
//                 console.log(element[key]);
//             }
//         }
//        console.log(keySum);
//     }
    
//     arrayObj(arr);
    



// 13 - створити функцію  
//      яка скаладає значення елементів з однаковими індексами  
//      та повертає новий результуючий масив.

// let arr1 = [10, 20, 30, 55, 64, 9];
// let arr2 = [2, 25, 66, 36, 14, 6];

// function arrSum (a, b) {
//     let arr3 = [];

//     for (let i = 0; i < b.length; i++) {
        
//             let sum = a[i] + b[i];

//             arr3.push(sum);
//         }
                
//         return arr3;
//     }
    
// let sumArray = arrSum(arr1,arr2)
// console.log(sumArray);



// 19 - *** створити функцію 
//          яка приймає масив та число "i", 
//          та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"

// function itemChanger(array, i) {
//     let item = array[i];
    
//     array[i] = array[i + 1];
//     array[i + 1] = item;
// console.log(array);

// }

// itemChanger([10, 20, 30, 55, 64, 9], 2);



// 20 - *** створити функцію 
//          яка буде переносити елементи з значенням 0 у кінець маисву. 
//          Зберігаючи при цьому порядок не нульових значень.
//        Двожина масиву від 2 до 100
//          Приклад
//      [1,0,6,0,3] => [1,6,3,0,0]
//      [0,1,2,3,4] => [1,2,3,4,0]
//      [0,0,1,0]   => [1,0,0,0]

// function lastElement (arr) {
//     if (arr.length > 2 && arr.length < 100) {

//         for (let i = 0; i < arr.length; i++) {
    
//             if (arr[i] === 0) {
//                 arr.splice (i, 1);
//                 arr.push(0);
//             }
    
//         }
//     }

//     return arr;
// }

// console.log(lastElement([10, 0, 20, 0, 30, 0, 55, 0, 64, 0, 9]));



// 27 - Створити функцію яка :
//      - Додає в боді блок з текстом "Hello owu"

// function blockAdd () {
//     let block = document.createElement('div');
//     block.innerText = "Hello owu";
//     document.body.appendChild(block)
//     return block;
// }
// console.log(blockAdd());



// 29 - Створити функцію яка : 
//      Додає в боді елемент з текстом . 
//      Тип елементу та текст отримати через аргументи

// function blockAdd (text, element) {
//     let block = document.createElement(element);
//     block.innerText = text;
//     document.body.appendChild(block)
//     return block;
// }
// console.log(blockAdd('Hello OK10', 'div'));



// 30 - Створити функцію яка :
//      приймає масив автомобілів (можна взяти з попередніх дз ),
//      та  індентифікатор елемнту 
//      в який потрібно додати список цих автомобілів.
//      Для кожного автомобіля створити свій блок, 
//      та додати його в елемент, індентифікатор якого ви отримали. 
//      Всі властивості авто в обному блоці


// let cars = [
//     { model: 'Honda', type: 'coupe', color: 'black', power: 187, torque: 230 },
//     { model: 'Opel', type: 'SUV', color: 'silver', power: 147, torque: 210 },
//     { model: 'Toyota', type: 'cedan', color: 'grey', power: 277, torque: 325 },
//     { model: 'BMW', type: 'SUV', color: 'black', power: 230, torque: 250 },
//     { model: 'Audi', type: 'cedan', color: 'black', power: 230, torque: 250 }
// ]

// function carsAdd (array, id) {
//     let elementById = document.getElementById(id);
//         for (let car of array) {
//             let carBlock = document.createElement('div');
//             carBlock.innerText = JSON.stringify(car);
//             elementById.appendChild(carBlock);
//         }
    
// }
// carsAdd(cars, 'carId');



// 32 - приймає масив автомобілів (можна взяти з попередніх дз ),
//      та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
//      Для кожного автомобіля створити свій блок, 
//      та додати його в елемент, індентифікатор якого ви отримали.
//      Для кожної властивості створити всередені блока автомоблія свій блок


// function carsAdd (array, id) {
//         let elementById = document.getElementById(id);
//             for (let car of array) {
//                 let carBlock = document.createElement('div');
//                 carBlock.innerText = 'Автомобіль';
//                 elementById.appendChild(carBlock);
//                 for (let key in car) {
//                     let paramsBlock = document.createElement('div');
//                     paramsBlock.innerText = JSON.stringify(car[key]);
//                     carBlock.appendChild(paramsBlock);
//                 }
//             }
        
//     }
//     carsAdd(cars, 'carId');



// 36 - (на основі минулого ДЗ)
// ** - функція приймає 2 масиви з рівною кількістю об'єктів 
//      та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
//      та повертає масив цих з'єднаних об'єктів.
//      Приклад масивів:

            let usersWithId = [
                {id: 1, name: 'vasya', age: 31, status: false}, 
                {id: 2, name: 'petya', age: 30, status: true}, 
                {id: 3, name: 'kolya', age: 29, status: true}, 
                {id: 4, name: 'olya', age: 28, status: false},
            ];
            let citiesWithId = [
                {user_id: 3, country: 'USA', city: 'Portland'}, 
                {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, 
                {user_id: 2, country: 'Poland', city: 'Krakow'}, 
                {user_id: 4, country: 'USA', city: 'Miami'}
            ];

function userAddress (usersWithId, citiesWithId) {

    let userAddress = [];

    for (let i = 0; i < usersWithId.length; i++) {
        userAddress[i] = usersWithId[i];
            for (let j = 0; j < citiesWithId.length; j++) {

                if (usersWithId[i].id === citiesWithId[j].user_id) {
                    userAddress[i]['address'] = citiesWithId[j];
                }
            }    
        }
        return userAddress;
}

console.log(userAddress (usersWithId, citiesWithId));
