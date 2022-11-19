let str = "india is my country here adding some extra words";

let arr = str.split(" ");
console.log(arr);

// console.log(arr[0][0].toUpperCase(), arr[1][0].toUpperCase(), arr[2][0].toUpperCase(), arr[3][0].toUpperCase());

for (let i = 0; i < arr.length; i++) {
  let wordArr = arr[i].split("");
  wordArr[0] = wordArr[0].toUpperCase();
  wordArr[wordArr.length - 1] = wordArr[wordArr.length - 1].toUpperCase();
  arr[i] = wordArr.join("");
}

console.log(arr.join(" "));

