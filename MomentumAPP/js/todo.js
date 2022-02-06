const toDoform = document.getElementById("todo-form");
const toDoInput = toDoform.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const delLi = event.target.parentElement; //parentElement가 li이다!
    delLi.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(delLi.id)); //delLi는 string
    saveToDos();
}

function paintToDo(newTodo) {
    const todoLi = document.createElement("li");
    todoLi.id = newTodo.id;
    const todoSpan = document.createElement("span");
    todoSpan.innerText = newTodo.text;
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
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoform.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}