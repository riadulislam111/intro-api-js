const loadTodo = async () => {
    const url = "https://jsonplaceholder.typicode.com/todos";
    const res = await fetch(url);
    const data = await res.json();
    displayTodo(data);
};

loadTodo();


const displayTodo = (todos) => {
    const todoContainer = document.getElementById("todo-container");
    todos.forEach((todo) => {
        const li = document.createElement("li");
        li.innerText = todo.title;
        todoContainer.appendChild(li);
    })
}





const data = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    console.log("Hello");
    const json = await res.json();
    console.log(json);
    console.log(true);
   
};
data();