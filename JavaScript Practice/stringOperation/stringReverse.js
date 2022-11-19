let str = "I love you Ajay";

let arr = str.split(" ");
let arr2 = arr.reverse();

for (let i = 0; i <= arr.length - 1; i++) {
  let arr3 = arr2[i].split("");
  let arr4 = arr3.reverse();
  let str2 = arr4.join("");
  arr2[i] = str2;
}

console.log(arr2.join(" "));

// console.log(str.split(" ").reverse().map(el => el.split("").reverse().join("")).join(" "));