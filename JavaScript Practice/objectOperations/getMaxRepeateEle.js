

let arr = [10, 20, 11, 11, 12, 10, 11, 23, 5, 10, 10];

let max = 0;
let maxkey;
let obj = {};

for (let i = 0; i < arr.length; i++) {
  if (obj[arr[i]]) {
    obj[arr[i]] = obj[arr[i]] + 1;
  } else {
    obj[arr[i]] = 1;
  }

}
// console.log(obj);

for (let key in obj) {
  if (obj[key] > max) {
    max = obj[key];
    maxkey = key;
  }
}
console.log(`Maximum time repeated num : "${maxkey}"`);


























