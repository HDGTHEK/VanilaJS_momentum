
const calculator = {
    plus: function (a, b) {
        console.log(a + b);
    },
    minus: function (a, b) {
        console.log(a - b);
    },
    multiply: function (a, b) {
        console.log(a * b);
    },
    divide: function (a, b) {
        console.log(a / b);
    },
    powerOf: function (a, b) {
        console.log(a ** b);
    },
}

calculator.plus(3, 4);
calculator.minus(42, 24);
calculator.multiply(4, 3);
calculator.divide(8, 2);
calculator.powerOf(2, 3);