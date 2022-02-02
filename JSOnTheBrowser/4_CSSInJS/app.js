const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    const clickedClass = "clicked"; //string은 항상 변수사용!
    
    // if (h1.classList.contains(clickedClass)) {
    //     h1.classList.remove(clickedClass);
    // } else {
    //     h1.classList.add(clickedClass);
    // } // 얘를 구현해주는 toggle이 있다!
    h1.classList.toggle(clickedClass); //위랑 same!
}

h1.addEventListener("click", handleTitleClick);