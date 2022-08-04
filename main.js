var num1 = 0;
var num2 = 0;
var operator = "";
var result = 0;


const previousNumber = document.querySelector('.previousNumber');
const currentNumber = document.querySelector('.currentNumber');
const operatorDisplay = document.querySelector('.operator');


document.getElementById("button1").addEventListener("click", button1, false);
document.getElementById("button2").addEventListener("click", button2, false);
document.getElementById("button3").addEventListener("click", button3, false);
document.getElementById("button4").addEventListener("click", button4, false);
document.getElementById("button5").addEventListener("click", button5, false);
document.getElementById("button6").addEventListener("click", button6, false);
document.getElementById("button7").addEventListener("click", button7, false);
document.getElementById("button8").addEventListener("click", button8, false);
document.getElementById("button9").addEventListener("click", button9, false);
document.getElementById("button0").addEventListener("click", button0, false);
document.getElementById("buttonAdd").addEventListener("click", buttonAdd, false);
document.getElementById("buttonSubtract").addEventListener("click", buttonSubtract, false);
document.getElementById("buttonMultiply").addEventListener("click", buttonMultiply, false);
document.getElementById("buttonDivide").addEventListener("click", buttonDivide, false);
document.getElementById("buttonClear").addEventListener("click", buttonClear, false);
document.getElementById("buttonEqual").addEventListener("click", buttonEqual, false);


function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function operate(operator, a, b) {
    num1 = Number(num1);
    num2 = Number(num2);
    if (operator === "+") {
        operator = "+"
        result = add(a, b)
        num1 = result;
        return result;
    }
    else if (operator === "-") {
        subtract(a, b)
    }
    else if (operator === "*") {
        divide(a, b)
    }
    else if (operator === "/") {
        divide(a, b)
    }
}

function button0() {
    currentNumber.textContent = 0
}

function button1() {
    if (operator != "=" && operator != "") {
        num2 = 1
        num2 += num1;
    }
    else if (operator != "=" || operator === "") {
        num1 = 1
        num1 += num2
        num1 = result;
        currentNumber.textContent = 1
        operate("+", num1, num2)
    }
    return result;
}

function button2() {
    currentNumber.textContent = 2
}

function button3() {
    currentNumber.textContent = 3
}

function button4() {
    currentNumber.textContent = 4
}

function button5() {
    currentNumber.textContent = 5
}

function button6() {
    currentNumber.textContent = 6
}

function button7() {
    currentNumber.textContent = 7
}

function button8() {
    currentNumber.textContent = 8
}

function button9() {
    currentNumber.textContent = 9
}

function buttonClear() {
    currentNumber.textContent = ''
    previousNumber.textContent = ''
    operator.textContent = ''
}

function buttonEqual() {
    currentNumber.textContent = `Result: ${result}`
    console.log(`${result}`)
}

function buttonAdd() {
    operator = "+";
    operatorDisplay.textContent = `${operator}`
}

function buttonSubtract() {
    operator = "-";
    operatorDisplay.textContent = `${operator}`
}

function buttonMultiply() {
    operator = "*";
    operatorDisplay.textContent = `${operator}`
}

function buttonDivide() {
    operator = "/";
    operatorDisplay.textContent = `${operator}`
}