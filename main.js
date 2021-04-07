let money = 0;
let job = true;

const clearHouse = (jobDone) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (jobDone) {
        money = 500;

        resolve(money);
      } else {
        reject('err')
      }
    }, 1000);
  })
};

const buyJeans = (money) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (money > 200) {
        console.log('buy jeans');
        money = money - 200;
        resolve(money)
      } else {
        reject('no money')
      }
    }, 1000)
  })
};

const goEat = (money) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (money > 100) {
        console.log('go eat');
        money = money - 50;

        resolve(money);
      } else {
        reject('no money for food');
      }

    }, 1000);
  })
}

const houseCleaner = async (job) => {
  try {
    const reward = await clearHouse(job);
    console.log(reward);

    const rest = await buyJeans(reward);
    console.log(rest);

    const food = await goEat(rest);
    console.log(food);

  } catch (error) {
    throw new Error(error);
  }
};

const btn = document.getElementById('btn');
btn.onclick = (job) => {
  return houseCleaner(!job);
}