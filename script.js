// // // // const person = {
// // // //     name: 'selim',
// // // //     fruit: 'dalim',
// // // //     friends: ["alim", "kolim", "lamim"],
// // // //     isRich: false,
// // // //     money: 34000
// // // // };

// // // // console.log(person, typeof person)

// // // // //JSON -> JS object with Notation
// // // // //JSON.stringify
// // // // //JSON.parse -> object

// // // // const personJSON = JSON.stringify(person);
// // // // console.log(personJSON, typeof personJSON);

// // // // const parseJSON = JSON.parse(personJSON);
// // // // console.log(parseJSON);

// // // const person = {
// // //   name: 'selim',
// // //   fruit: 'dalim',
// // //   friends: ["alim", "kolim", "lamim"],
// // //   isRich: false,
// // //   money: 34000
// // // };
// // // console.log(person, typeof person);

// // // const personJSON = JSON.stringify(person);
// // // console.log(personJSON, typeof personJSON);


// // const task = {
// //     id: 1,
// //     title: "Learn JSON",
// //     completed: false
// // };

// // const taskJSON = JSON.stringify(task);

// // console.log(taskJSON);
// // console.log(typeof taskJSON);

// // const jsonString = '{"name":"Rafi","age":22,"skills":["JS","HTML"]}';

// // const user = JSON.parse(jsonString);

// // console.log(user);
// // console.log(typeof user);

// // console.log(user.name);
// // console.log(user.skills[1]);


// const product = {
//     productName: "Laptop",
//     price: 75000
// };

// const productJSON = JSON.stringify(product);
// console.log(productJSON);

// const productobj = JSON.parse(productJSON);
// console.log(productobj.productName);
// console.log(productobj.price);


// console.log(typeof product);      // object
// console.log(typeof productJSON);  // string
// console.log(typeof productObj);   // object


// const loadData = () => {
//     fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((res) => res.json())
//     .then((data) => console.log(data))
// }