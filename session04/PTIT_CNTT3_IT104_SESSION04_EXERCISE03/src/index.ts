interface Student {
    name: string,
    age: number,
    email:string
}

function introduceStudent(student : Student) : void {
    console.log(`Ten toi la ${student.name}, toi ${student.age} tuoi, email cua toi la ${student.email}`)
}

const student1: Student = {
    name: "Tran Manh Duong",
    age: 20,
    email: "duong.tranduong@gmail.com"
}

introduceStudent(student1);