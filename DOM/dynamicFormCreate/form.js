
const btn = document.getElementById('add_btn');
let arr = [];

// console.log(addBtn);
btn.addEventListener("click", () => {
  let obj = {};

  let firstName = document.getElementById("fbox");
  let lastName = document.getElementById("lbox");
  let age = document.getElementById("agebox");

  obj["firstName"] = firstName.value;
  obj["lastName"] = lastName.value;
  obj["age"] = age.value;

  //obj= { firstName:   ,
  //   lastName: ,
  //     age:
  // }


  if (firstName.value != "" && lastName.value != "" && age.value != "") {
    arr.push(obj);
    printTable(obj);
  }

  // arr.push(obj);
  // console.log(arr);

  // printTable(obj);

  firstName.value = '';
  lastName.value = '';
  age.value = '';
})

function printTable(obj) {
  const tableDetails = document.getElementById("tableDetails");

  const rowDetails = document.createElement("tr");
  const fname = document.createElement("td");
  const lname = document.createElement("td");
  const a_g_e = document.createElement("td");// <td></td>

  fname.innerHTML = obj.firstName;
  lname.innerHTML = obj.lastName;
  a_g_e.innerHTML = obj.age;//<td>10</td>

  rowDetails.appendChild(fname);
  rowDetails.appendChild(lname);
  rowDetails.appendChild(a_g_e);



  tableDetails.appendChild(rowDetails);


}


// let per = {
//   fname: "Nikia",
//   lname: "Birari",
//   age: 25,
// }

// arr.push(per);
// arr = [  {
//fname: "Nikia",
//   lname: "Birari",
//     age: 25,
// },  {
// fname: "Nikia",
//   lname: "Birari",
//     age: 25,
// }]















