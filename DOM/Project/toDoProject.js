


const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", () => {
  let tableData = document.getElementById("taskTable");

  let inputbox = document.getElementById("inputBox");
  if (inputbox.value != "") {
    let rowdata = document.createElement("tr");
    let task = document.createElement("td");
    let action = document.createElement("td");
    let editbtn = document.createElement("button");
    editbtn.appendChild(document.createTextNode("Edit"));
    editbtn.style.marginright = "30px";


    editbtn.style.marginleft = "30px";

    let delbtn = document.createElement("button");
    delbtn.appendChild(document.createTextNode("Delete"));

    task.innerHTML = inputbox.value;

    action.appendChild(editbtn);
    action.appendChild(delbtn);
    rowdata.appendChild(task);
    rowdata.appendChild(action);
    tableData.appendChild(rowdata);
  }

  inputbox.value = '';
})






























