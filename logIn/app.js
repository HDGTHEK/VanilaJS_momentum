const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(event) {
    event.preventDefault();
}

function handleLinkClick(event) {
    event.preventDefault();
}

loginForm.addEventListener("submit", onLoginSubmit); //listening submit event
// onLoginSubmit(info) 이라고 안하는 이유 -> ()는 즉시실행하니까!
