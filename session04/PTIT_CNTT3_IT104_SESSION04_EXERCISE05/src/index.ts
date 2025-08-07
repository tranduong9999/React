type Person = {
    name: string,
    age: number
}

type Employee = {
    employeeID: string,
    department: string
}

type staffMember = Person & Employee

function printStaffInfo(staff : staffMember): void {
    console.log(`Nhan vien ${staff.name} (${staff.age} tuoi), Ma nhan vien: ${staff.employeeID}, Phong: ${staff.department}`)
}

const staff1: staffMember ={
    name: "Nguyen Van A",
    age: 28,
    employeeID: "EMP001",
    department: "Ke toan"
}

printStaffInfo(staff1)