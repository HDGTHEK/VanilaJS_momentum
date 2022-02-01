const title = document.querySelector("div.hello:first-child h1");

//event를 listen하는게 중요!

function handleTitleClick() {
    console.log("title was clicked!");
    title.style.color = "blue";
}

title.addEventListener("click", handleTitleClick);