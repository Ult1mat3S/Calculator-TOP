function add(num1, num2) {
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
    if (operator == "+") {
        return add(num1, num2);
    }
    else if (operator == "-") {
        return subtract(num1, num2);
    }
    else if (operator == "*") {
        return multiply(num1, num2);
    }
    else if (operator == "/") {
        return divide(num1, num2);
    }
}

function button0() {
    const display = document.querySelector('#display');
    display.textContent = 0
}

function button1() {
    const display = document.querySelector('#display');
    display.textContent = 1
}

function button2() {
    const display = document.querySelector('#display');
    display.textContent = 2
}

function button3() {
    const display = document.querySelector('#display');
    display.textContent = 3
}

function button4() {
    const display = document.querySelector('#display');
    display.textContent = 4
}

function button5() {
    const display = document.querySelector('#display');
    display.textContent = 5
}

function button6() {
    const display = document.querySelector('#display');
    display.textContent = 6
}

function button7() {
    const display = document.querySelector('#display');
    display.textContent = 7
}

function button8() {
    const display = document.querySelector('#display');
    display.textContent = 8
}

function button9() {
    const display = document.querySelector('#display');
    display.textContent = 9
}

function buttonClear() {
    const display = document.querySelector('#display');
    display.textContent = ''
}

function buttonEqual() {
    const display = document.querySelector('#display');
    display.textContent = ''
}
