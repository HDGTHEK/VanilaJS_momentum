const age = parseInt(prompt("How old are you?"));


if (isNaN(age) || age < 0) {
    console.log("Are you insane? Write the fucking your age");
   // condition === true
}
else if(age < 18) {
    console.log("You are too young.");
}
else if (age >= 18 && age < 50) {
    console.log("You can drink");
    } // && == and, || == or
else if (age > 50 && age <= 80) {
    console.log("You should be careful")    
}
else if (age > 80) {
    console.log("You will be fucked up!");
}