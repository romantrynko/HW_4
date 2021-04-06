localStorage.setItem('1', 'value 1');

const user = {
  name: 'Roman',
  age: 32,
  job: 'Senior JS developer'
};

localStorage.setItem('user', user);
localStorage.setItem('userJSON', JSON.stringify(user));

const jsonUser = localStorage.getItem('userJSON');

const parsedUser = JSON.parse(jsonUser);

console.log(jsonUser);
console.log(parsedUser);

localStorage.removeItem('user');

console.log(localStorage.length);

localStorage.clear();