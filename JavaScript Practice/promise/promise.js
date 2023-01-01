
console.log("Started....");

let roomIsClean = true;
const cleanRoom = new Promise((resolve, reject) => {
  if (roomIsClean == true) {
    resolve({ name: "ajay", age: 25 });
  } else {
    reject("Room is not clean");
  }
});

console.log("Promise Started....");
cleanRoom.then((response) => {
  console.log(JSON.stringify(response));
  console.log(response);
}).catch((err) => {
  console.log(err);
})
console.log("Stop....");

// console.log(1);
// console.log(2);
// setTimeout(() => console.log(3), 1000);
// setTimeout(() => console.log(4), 0);
// setTimeout(() => console.log(5), 3000);
// console.log(6);

// 1 2 6 4 3 5