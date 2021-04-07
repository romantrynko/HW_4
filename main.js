



// function goToTurkey(covid, cb) {
//   setTimeout(() => {
//     if (covid) {
//       cb('covid is present', null)
//     } else {
//       cb(null, 'everything is OK')
//     }
//   }, 2000)
// };

// goToTurkey(false, (err, data) => {
//   if(err) {
//     console.log(err, 'bad');
//   } else {
//     console.log('good', data);
//   }
// });



let money = 0;

const clearHouse = (jobDone, cb) => {
  setTimeout(() => {
    if (jobDone) {
      money = 500;

      cb(null, money);
    } else {
      cb('oops')
    }
  }, 2000);
};

const buyJeans = (money, cb) => {
  setTimeout(() => {
    if (money > 200) {
      console.log('buy jeans');
      money = money - 200;

      cb(null, money)
    } else {
      console.log('no money');

      cb('no', null)
    }
  }, 1000)
};

const goEat = (money, cb) => {
  if (money > 100) {
    console.log('go eat');
    money = money - 50;

    cb(null, money)
  } else {
    console.log('no money');
    
    cb(err)
  }
}

clearHouse(true, (err, data) => {
  if (err) {
    document.write('something went wrong')
  } else {
    document.write('ok ' + data);

    buyJeans(data, (err, rest) => {
      if (err) {
        document.write('no money');
      } else {
        document.write('yes!');

        goEat(rest, (err, data) => {
          if (err) {
            document.write('no money for food');
          } else {
            document.write('eat your food')
          }
        })
      }
    })
  }
});

console.log(money);