let a = null;
let b = null;
let operator = '';
let displayTotal = '';
let displayNumber = '';

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    if (operator == "+") {
        return add(a, b);
    }
    else if (operator == "-") {
        return subtract(a, b);
    }
    else if (operator == "*") {
        return multiply(a, b);
    }
    else if (operator == "/") {
        return divide(a, b);
    }
}

function button0() {
    const display = document.querySelector('#display');
    displayNumber = 0
    display.textContent = 0
}

function button1() {
    const display = document.querySelector('#display');
    displayNumber = 1
    display.textContent = 1
    return displayNumber;
}

function button2() {
    const display = document.querySelector('#display');
    displayNumber = 2
    display.textContent = 2
    return displayNumber;
}

function buttonEqual() {
    const display = document.querySelector('#display');
    operator = '='
    operate(operator, a, b)
    display.textContent = displayNumber
    console.log(displayNumber);
}

function buttonAdd() {
    const display = document.querySelector('#display');
    operator = '+'
    a = a + displayNumber
    console.log(a)
    return a
}

