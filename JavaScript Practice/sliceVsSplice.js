
let arr1 = [10, 20, 30, 40, 50];
//slice (startIndex,endIndex)
console.log(arr1.slice(2, 4));
console.log(arr1);

let arr2 = [10, 20, 30, 40, 50];
//splice (startIndex, noOfElementsToDeleteFromStartIndex,addListOfNewElements)
console.log(arr2.splice(2, 2, 1));
console.log(arr2);

let str = "Hello world";

console.log(str.slice(2, 5));
console.log(str);

//Splice can only be use on array
// console.log(str.splice(2, 5));
// console.log(str);

