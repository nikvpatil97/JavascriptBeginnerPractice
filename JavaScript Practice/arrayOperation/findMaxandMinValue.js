

let arr = [20, 40, 50, 400, 100, 11, 200, 39, 67, -11];

let max = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (max < arr[i]) {
    max = arr[i];
  }
}
console.log("Max value in the array is : ", max);

let min = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (min > arr[i]) {
    min = arr[i];
  }
}
console.log("Min value in the array is : ", min);











