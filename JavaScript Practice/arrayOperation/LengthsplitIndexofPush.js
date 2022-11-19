

let colors = ["black", "white", "Red", "Pink"];

console.log("Using length :", colors.length);

let joinstr = colors.join("#");
let tostr = colors.toString();

console.log("Using Join :", joinstr);
console.log("Using tostring :", tostr);

let str = "Nikita Ajay Birari";
const arr = str.split(' ');
console.log("Using Split:", arr);
console.log(arr[0]);
console.log(arr[arr.length - 1]);




let numbers = [12, 34, 56, 67];
console.log(numbers);
console.log("Using indexof 56 :", numbers.indexOf(56));


console.log("Array of Numbers :", numbers);
console.log("Using Push :", numbers.push(100));
console.log(numbers);
console.log("Using Pop :", numbers.pop());
console.log(numbers);

console.log("Using unshift : ", numbers.unshift(20));
console.log(numbers);
console.log("Using shift : ", numbers.shift());
console.log(numbers);
