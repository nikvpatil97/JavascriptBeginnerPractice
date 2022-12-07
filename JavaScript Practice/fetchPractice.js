

let p = fetch("https://goweather.herokuapp.com/weather/Ny")
p.then((response) => {
  return response.json()
  console.log(response.status)
  console.log(response.ok)
  console.log(response.json())
}).then((value2) => {
  console.log(value2)
})

// const createTodo = async (todo) => {
//   let options = {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json"

//     },
//     body: JSON.stringify(todo)
//   }
//   let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
//   let response = await p.json()
//   return response
// }


// const mainFunc = async () => {
//   let todo = {

//     title: 'foo1',
//     body: 'bar1',
//     userId: 11,

//   }
//   let todores = await createTodo(todo)
//   console.log(todores)
// }

// mainFunc()















