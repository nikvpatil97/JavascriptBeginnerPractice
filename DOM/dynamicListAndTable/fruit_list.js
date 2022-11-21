
const fruitsList = ["Mango", "Apple", "Orange", "Grapes", "Pineapple", "Banana", "Cherry", "Watermelon"];
const listWrapper = document.getElementById("fruitList");

fruitListFunc(fruitsList);
function fruitListFunc(fruitList) {
  for (let i = 0; i < fruitList.length; i++) {
    let liItem = document.createElement("li");
    liItem.textContent = fruitList[i];
    listWrapper.appendChild(liItem);
  }

  fruitsList.forEach((el) => {
    const liItem = document.createElement("li");// <li></li>
    liItem.textContent = el; //<li>Value</li>

    listWrapper.appendChild(liItem);
  })
}


//Table

const students = ["Ajay", "Nikita", "Sau"];

const student_list = document.getElementById("studentList");
students.forEach((el) => {
  const studentRow = document.createElement("tr");
  const studentName = document.createElement("td");
  const studentAge = document.createElement("td");

  studentName.innerHTML = el;
  studentAge.innerHTML = 20;
  studentRow.appendChild(studentName);
  studentRow.appendChild(studentAge);
  student_list.appendChild(studentRow);
})

const stuArr = [{ name: "Ajay", age: 28 }, { name: "Nikita", age: 25 }, { name: "Lokesh", age: 27 }];

const studentDetails = document.getElementById("studentDetails");

stuArr.forEach((el) => {
  const stuRow = document.createElement("tr");
  const stuName = document.createElement("td");
  const stuAge = document.createElement("td");

  stuName.innerHTML = el.name;
  stuAge.innerHTML = el.age;

  stuRow.appendChild(stuName);
  stuRow.appendChild(stuAge);
  studentDetails.appendChild(stuRow);


})




















