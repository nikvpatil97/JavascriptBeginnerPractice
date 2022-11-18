
// const btnclick1 = document.querySelectorAll('.print_no');
// const btnclick2 = document.querySelector('#btn2');
// const btnclick3 = document.querySelector('#btn3');

const msg = document.querySelector('#msg');

// btnclick1.addEventListener('click', () => {
//   msg.textContent = "One";
// })

// btnclick2.addEventListener('click', () => {
//   msg.textContent = "Two";
// })

// btnclick3.addEventListener('click', () => {
//   msg.textContent = "Three";
// })

// function printNumber(event) {
// console.log('hello');
// console.log(event.target.innerHTML);
//   let val = event.target.innerHTML;
//   if (val == 10) {
//     msg.textContent = 'Ten';
//   } else if (val == 20) {
//     msg.textContent = 'Twenty';
//   } else if (val == 30) {
//     msg.textContent = 'Thirty';
//   }


// }
// btnclick[0].addEventListener('click', () => {

//   console.log('Hello');
// })
function printInWord(event) {
  console.log(event.target.innerHTML);

  let value = event.target.innerHTML;

  switch (value) {
    case "10":
      msg.textContent = 'Ten';
      break;
    case "20":
      msg.textContent = 'Twenty';

      break;
    case "30":
      msg.textContent = 'Thirty';

      break;
  }
}
