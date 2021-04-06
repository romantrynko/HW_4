// navigator.geolocation.getCurrentPosition(({coords}) => {
//   console.log(coords.latitude);
//   console.log(coords.longitude);
//   console.log(coords.altitude);
// })

// let webCam = document.getElementById('webCam');

// navigator.mediaDevices.getUserMedia({audio: false, video: true}).then(value => {
//   webCam.srcObject = value;

//   webCam.play();
// });

// console.log(navigator);

// const filters = [
//   { vendorId: 0x1209, productId: 0xa800 },
//   { vendorId: 0x1209, productId: 0xa850 }
// ];
// navigator.usb.requestDevice({ filters: filters })
//   .then(usbDevice => {
//     console.log("Product name: " + usbDevice.productName);
//   })
//   .catch(e => {
//     console.log("There is no device. " + e);
//   });



// function functionWithCB (callBack) {
//   console.log(callBack);

//   callBack()
// };

// functionWithCB(function () {
//   console.log('Call Back');
// });

// const arr = ['corona', 'blm', 'rain'];

// const summer = (array) => {
//   const [h, r] = array;
//   console.log(h, r);
// };

// summer(['hello', 'Roman']);

// const cbFunction = (value) => {
//   const pro = prompt();

//   value(pro);
// };

// cbFunction((param) => {
//   document.write(param);
// });

// cbFunction(() => {
//   console.log(22);
// });


// arr.sort((a, b) => {
//   return a - b
// });

// let money = 0;

// const clearHouse = (jobIsDone, cb) => {
//   setTimeout(() => {
//     if (jobIsDone) {
//       money = 500;
//       cb(money);
//     } else {
//       document.write('bad')
//     }
//   }, 2500)
// };

// clearHouse(true, (reward) => {
//   console.log(reward);
// });

users = [
  { name: 'Roman Trynko', age: 32 },
  { name: 'Valia Dyatlov', age: 12 },
  { name: 'Roman Vasyl', age: 45 },
  { name: 'Pasha Loginov', age: 44 }
];

const nameToFind = 'ro'

const filteredNames = users.reduce((prev, curr) => {
  if (curr.name.toLowerCase().startsWith(nameToFind.toLocaleLowerCase()) && !prev.includes(curr.name)) {
    prev.push(curr.name);
  };

  return prev;
}, []);

console.log(filteredNames);

