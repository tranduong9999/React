"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printStaffInfo(staff) {
    console.log(`Nhan vien ${staff.name} (${staff.age} tuoi), Ma nhan vien: ${staff.employeeID}, Phong: ${staff.department}`);
}
const staff1 = {
    name: "Nguyen Van A",
    age: 28,
    employeeID: "EMP001",
    department: "Ke toan"
};
printStaffInfo(staff1);
//# sourceMappingURL=index.js.map