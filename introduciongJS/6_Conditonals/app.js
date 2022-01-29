const age = parseInt(prompt("How old are you?"));


if (isNaN(age) || age < 0) {
    console.log("Are you insane? Write your fucking age");
   // condition === true
}
else if(age < 18) {
    console.log("You are too young.");
}
else if (age >= 18 && age < 50) {
    console.log("You can drink");
    } // && -> and, || -> or
else if (age > 50 && age <= 80) {
    console.log("You should be careful")    
}
else if (age === 100) {
    console.log("God damn...")
} // === -> 조건문 same인지 확인 !== -> 조건문 not same인지 확인
else if (age > 80) {
    console.log("You will be fucked up!");
} // JS는 위에서 아래로 읽음 -> 위에거보다 먼저오면 ㅈ댐