
const add = document.querySelector('.btn');

// add.addEventListener('click', () => {
//   console.log("addEventListener...");
//   const input1 = document.querySelector('.input_1');
//   const input2 = document.querySelector('.input_2');
//   const result = document.querySelector('.res');
//   let addition = Number(input1.value) + Number(input2.value);
//   result.textContent = addition;
// })

const input1 = document.querySelector('.input_1');
const input2 = document.querySelector('.input_2');
const result1 = document.querySelector('.res_add');
const result2 = document.querySelector('.res_sub');
const result3 = document.querySelector('.res_mul');
const result4 = document.querySelector('.res_div');


function addition() {
  // console.log("Inline...");
  let addition = Number(input1.value) + Number(input2.value);
  result1.textContent = addition;
}

// add.addEventListener("click", addition);

function substraction() {
  // console.log("Inline...");
  let substraction = Number(input1.value) - Number(input2.value);
  result2.textContent = substraction;
}
// add.addEventListener("click", substraction);

function multiplication() {
  // console.log("Inline...");
  let multiplication = Number(input1.value) * Number(input2.value);
  result3.textContent = multiplication;
}
// add.addEventListener("click", multiplication);

function divide() {
  // console.log("Inline...");
  let divide = Number(input1.value) / Number(input2.value);
  result4.textContent = divide;
}


function mathOperation() {
  let no1 = Number(input1.value), no2 = Number(input2.value);

  let addition = no1 + no2;
  let substraction = no1 - no2;
  let multiplication = no1 * no2;
  let division = no1 / no2;

  result1.textContent = addition;
  result2.textContent = substraction;
  result3.textContent = multiplication;
  result4.textContent = division;
}