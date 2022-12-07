

// const searchBtn = document.querySelector("#searchbtn");

// searchBtn.addEventListener("click", () => {
//   let searchterm = document.querySelector("#inputBox").value;
//   let url = `https://jsonplaceholder.typicode.com/comments?postId=${searchterm}`;

//   fetch(url).then(response => response.json())
//     .then(response => {
//       console.log(response);
//     }).catch(error => {
//       console.log("Not found");
//     })
// })



function fetchData() {
  let searchTerm = document.querySelector("#inputBox").value;
  let url = `https://jsonplaceholder.typicode.com/comments?postId=${searchTerm}`;
  fetch(url).then(response => response.json())
    .then(response => {
      console.log(response);
    }).catch(error => {
      console.log("Not found");
    })
}