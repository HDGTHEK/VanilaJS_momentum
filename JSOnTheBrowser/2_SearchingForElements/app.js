const hellos = document.getElementsByClassName("hello"); //hellos는 Array!

console.log(hellos);

const title = document.getElementsByTagName("h1");

console.log(title);

// It'S all array

const luv = document.querySelector(".hello h1");
//CSS Selector 사용! (classname hello 안의 h1)
// 이 강의에서는 querySelector 주로 사용

console.log(luv);