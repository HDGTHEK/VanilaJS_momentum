const toDoform = document.getElementById("todo-form");
const toDoInput = toDoform.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

const toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const delLi = event.target.parentElement; //parentElement가 li이다!
    delLi.remove();
}

function paintToDo(newTodo) {
    const todoLi = document.createElement("li");
    const todoSpan = document.createElement("span");
    todoSpan.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    todoLi.appendChild(todoSpan);
    todoLi.appendChild(button);
    toDoList.appendChild(todoLi); //append는 마지막에 놓여야 함!
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

toDoform.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.forEach((item) => console.log("this is the turn of ", item));
}