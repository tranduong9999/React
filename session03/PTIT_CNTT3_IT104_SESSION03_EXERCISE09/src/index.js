"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function toNumber(value) {
    const num = Number(value);
    return isNaN(num) ? null : num;
}
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
    if (b === 0)
        return "Không thể chia cho 0";
    return a / b;
}
function power(base, exponent) {
    return Math.pow(base, exponent);
}
function sqrt(base, root) {
    return Math.pow(base, 1 / root);
}
function factorial(n) {
    if (n < 0 || !Number.isInteger(n))
        return "Không hợp lệ";
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
function handle(op) {
    const input1 = document.getElementById("input1").value;
    const input2 = document.getElementById("input2").value;
    const resultDisplay = document.getElementById("result");
    const num1 = toNumber(input1);
    const num2 = toNumber(input2);
    let result = "";
    if (op === "!") {
        if (num1 === null) {
            resultDisplay.textContent = "Kết quả: Giá trị không hợp lệ";
            return;
        }
        result = factorial(num1);
    }
    else {
        if (num1 === null || num2 === null) {
            resultDisplay.textContent = "Kết quả: Giá trị không hợp lệ";
            return;
        }
        switch (op) {
            case "+":
                result = add(num1, num2);
                break;
            case "-":
                result = subtract(num1, num2);
                break;
            case "*":
                result = multiply(num1, num2);
                break;
            case "/":
                result = divide(num1, num2);
                break;
            case "^":
                result = power(num1, num2);
                break;
            case "√":
                result = sqrt(num1, num2);
                break;
        }
    }
    resultDisplay.textContent = "Kết quả: " + result;
}
//# sourceMappingURL=index.js.map