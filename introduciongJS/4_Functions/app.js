/*
//How to create one
function sayHello(nameOfPerson, age) {
    console.log("Hello my name is " + nameOfPerson);
    console.log("I'm " + age + " years old");
}

sayHello("hdg",24);
sayHello("donggyunHa",23);
sayHello("king", 22);

//firstNum, secondNum은 함수 plus안에서만 존재!
function plus(firstNum, secondNum) {
    console.log(firstNum + secondNum);
}

function divide(a, b){
    console.log(a / b);
}
plus(8, 60);
divide(49, 7);
*/

//object안에서 함수
const player = {
    name: "hdg",
    sayHello: function (otherPersonName) {
        console.log("Hello " + otherPersonName +
         " nice to meet you!");
    },
}

console.log(player.name);
player.sayHello("lynn");
player.sayHello("nico");