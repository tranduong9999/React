"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function handleUnionType(value) {
    if (typeof value === "string") {
        console.log(`${value.length} ky tu`);
    }
    else if (typeof value === "number") {
        if (value % 2 === 0) {
            console.log("Day la so chan");
        }
        else {
            console.log("Day la so le");
        }
    }
}
handleUnionType("demo123");
handleUnionType(7);
handleUnionType(8);
//# sourceMappingURL=index.js.map