"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let input = "hello world";
let result = "";
for (let char of input) {
    if (!result.includes(char)) {
        result += char;
    }
}
console.log(result);
//# sourceMappingURL=index.js.map