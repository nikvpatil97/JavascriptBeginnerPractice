
//Foreach :- Printing all elements

let arr1 = [10, 20, 30, 40, 50];

console.log("print each array element:");

arr1.forEach((el) => {
  console.log(el);

})


//Map :- Transform array elements 

let arr2 = [10, 20, 30, 40, 50];

let res = arr2.map((el) => {
  return el * 2;
})
console.log("Print Double of array elements :");
console.log(res);


//Filter :
let arr3 = [13, 11, 2, 10, 14, 9];

let result_array = arr3.filter((el) => {
  if (el % 2 != 0) {
    return true;
  }
  else {
    return false;
  }
})

console.log("By using filter print odd elements:");
console.log(result_array);

//Sort : Ascending order
let arr4 = [13, 11, 2, 10, 14, 9];
console.log("Original Array :", arr4);

// let res1 = arr4.sort();
let res1 = arr4.sort((a, b) => (a - b));

console.log("Ascending order :", res1);

//Sort : Descending order
let arr5 = [13, 11, 2, 10, 14, 9];

let res2 = arr4.sort((a, b) => (b - a));

console.log("Descending order :", res2);

//Reduce :

let arr6 = [10, 20, 30, 40, 50];

let array_addition = arr6.reduce((acc, next) => {
  return acc + next;
})

console.log("Addition of array is : ", array_addition);
