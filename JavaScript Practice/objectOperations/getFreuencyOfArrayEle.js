


let arr1 = [10, 20, 11, 12, 10, 11, 23, 5, 20];


function freqOfElement(arr) {

  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]] = obj[arr[i]] + 1;
    } else {
      obj[arr[i]] = 1;
    }
  }
  console.log(obj);

}

freqOfElement(arr1);














