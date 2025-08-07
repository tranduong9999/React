"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function processInput(input) {
    if (typeof input === "string") {
        if (!isNaN(Number(input))) {
            console.log(Number(input) ** 2);
        }
        else {
            let count = 0;
            for (let c of input) {
                if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z')) {
                    count++;
                }
            }
            console.log(`${count} ký tự chữ cái`);
        }
    }
    else if (typeof input === "number") {
        if (input < 2) {
            console.log("Không phải số nguyên tố");
            return;
        }
        for (let i = 2; i <= Math.sqrt(input); i++) {
            if (input % i === 0) {
                console.log("Không phải số nguyên tố");
                return;
            }
        }
        console.log("Là số nguyên tố");
    }
    else {
        console.log(input ? "Giá trị là true - tiến hành xử lý" : "Giá trị là false - dừng xử lý");
    }
}
processInput("123");
processInput("abc123!");
processInput(7);
processInput(10);
processInput(true);
processInput(false);
//# sourceMappingURL=index.js.map