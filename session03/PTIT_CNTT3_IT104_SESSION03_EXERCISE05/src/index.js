"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let firstName = "john";
let lastName = "doe";
function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
firstName = capitalize(firstName);
lastName = capitalize(lastName);
let fullName = `${firstName} ${lastName}`;
console.log(fullName);
//# sourceMappingURL=index.js.map