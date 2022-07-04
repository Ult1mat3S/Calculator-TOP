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