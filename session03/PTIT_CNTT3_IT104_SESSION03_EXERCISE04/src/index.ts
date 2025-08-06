let strValue: string = "2";
let numValue: number = 2;

console.log(strValue == numValue);  
console.log(strValue === numValue); 
// == (so sánh lỏng): Chuyển đổi kiểu dữ liệu trước khi so sánh → "2" được ép kiểu thành 2 → 2 == 2 → true

// === (so sánh chặt): Không chuyển đổi kiểu → "2" là string, 2 là number → khác kiểu → false