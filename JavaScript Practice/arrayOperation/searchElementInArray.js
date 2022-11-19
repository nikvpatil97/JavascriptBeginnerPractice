


let arr = [30, 50, 33, 24, 70, 300, 6];

let no_is_available = false;
// let no = 10;
let search_num = 50;


for (let i = 0; i < arr.length - 1; i++) {
  if (search_num == arr[i]) {
    // no = 11;
    no_is_available = true;
    break;
  }
  // else {
  //   console.log("Number not available in array");
  // }

}

no_is_available == true ? console.log("Number available in array") : console.log("Number not available in array");

// no == 11 ? console.log("Number available in array") : console.log("Number not available in array");



















