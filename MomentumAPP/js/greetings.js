const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const logoutForm = document.querySelector("#logout-form");
const toDoHide = document.querySelector("#todo-hide"); //todo.js 참조

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

const link = document.querySelector("a");

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const usernameWrote = loginInput.value;
    localStorage.setItem(USERNAME_KEY, usernameWrote);
    paintGreetings(usernameWrote);
}

function onLogoutSubmit(event) {
    alert('로그아웃 되었습니다.');
    localStorage.removeItem(USERNAME_KEY);
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    logoutForm.classList.remove(HIDDEN_CLASSNAME);
    toDoHide.classList.remove(HIDDEN_CLASSNAME);
    logoutForm.addEventListener("submit", onLogoutSubmit);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else {
    //show the greetings
    paintGreetings(savedUsername);
}