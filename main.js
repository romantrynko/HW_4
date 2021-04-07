// ____________________________ P R O M I S E _______ об'єкт ________________



//     p e n d i n g ( за замовчуванням в стані очікування )

//                 --   r e s o l v e ( виконався успішно )

//                    --    r e j e c t ( не виконався )



// let money = 0;

// const clearHouse = (jobDone) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (jobDone) {
//         money = 500;

//         resolve(money);
//       } else {
//         reject('err')
//       }
//     }, 1000);
//   })
// };

// const buyJeans = (money) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (money > 200) {
//         console.log('buy jeans');
//         money = money - 200;
//         resolve(money)
//       } else {
//         reject('no money')
//       }
//     }, 1000)
//   })
// };

// const goEat = (money) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (money > 100) {
//         console.log('go eat');
//         money = money - 50;

//         resolve(money);
//       } else {
//         reject('no money for food');
//       }

//     }, 1000);
//   })
// }

// clearHouse(true)
//   .then(value => {
//     console.log('clearHouse()', value);
//     return buyJeans(value);
//   })
//   .then(value => {
//     console.log('buyJeans', value);
//     return goEat(100);
//   })
//   .then(value => {
//     console.log('goEat', value);
//     return value;
//   })
//   .catch(reason => {
//     console.error(reason);
//   })
//   .finally(() => {
//     console.log('anyway');
//   });

const one = new Promise(resolve => {
  setTimeout(() => {
    resolve(1)
  }, 3000);
});

const two = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(2)
  }, 2000);
});

const three = new Promise(resolve => {
  setTimeout(() => {
    resolve(3)
  }, 4000);
});

// Promise.race([one, two, three])
//   .then(value => {
//     console.log(value);
//   });

// Promise.all([one, two.catch(reason => {return reason}), three])
//   .then(value => {
//     console.log(value);
//   });

Promise.allSettled([one, two, three])
  .then(value => {
    console.log(value);
  });
