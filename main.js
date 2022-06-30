function add(num1, num2) {
    console.log(arguments);
    const sum = num1 + num2;
    return sum;
}

function subtract(num1, num2) {
    const sum = num1 - num2;
    return sum;
}

function multiply(num1, num2) {
    const sum = num1 * num2;
    return sum;
}

function divide(num1, num2) {
    const sum = num1 / num2;
    return sum;
}

function operate(operator, num1, num2) {
    console.log(arguments);
    add.apply(null, arguments);
    }

