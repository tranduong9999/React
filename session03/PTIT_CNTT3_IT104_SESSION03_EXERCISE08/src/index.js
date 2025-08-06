"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function toNumber(value) {
    const num = Number(value);
    return isNaN(num) ? null : num;
}
function add(a, b) {
    const numA = toNumber(a);
    const numB = toNumber(b);
    if (numA === null || numB === null)
        return "Giá trị không hợp lệ";
    return numA + numB;
}
function subtract(a, b) {
    const numA = toNumber(a);
    const numB = toNumber(b);
    if (numA === null || numB === null)
        return "Giá trị không hợp lệ";
    return numA - numB;
}
function multiply(a, b) {
    const numA = toNumber(a);
    const numB = toNumber(b);
    if (numA === null || numB === null)
        return "Giá trị không hợp lệ";
    return numA * numB;
}
function divide(a, b) {
    const numA = toNumber(a);
    const numB = toNumber(b);
    if (numA === null || numB === null)
        return "Giá trị không hợp lệ";
    if (numB === 0)
        return "Không thể chia cho 0";
    return numA / numB;
}
//# sourceMappingURL=index.js.map