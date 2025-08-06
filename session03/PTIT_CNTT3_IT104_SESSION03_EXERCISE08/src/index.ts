function toNumber(value: number | string): number | null {
    const num = Number(value);
    return isNaN(num) ? null : num;
  }
  
  function add(a: number | string, b: number | string): number | string {
    const numA = toNumber(a);
    const numB = toNumber(b);
    if (numA === null || numB === null) return "Giá trị không hợp lệ";
    return numA + numB;
  }
  
  function subtract(a: number | string, b: number | string): number | string {
    const numA = toNumber(a);
    const numB = toNumber(b);
    if (numA === null || numB === null) return "Giá trị không hợp lệ";
    return numA - numB;
  }
  
  function multiply(a: number | string, b: number | string): number | string {
    const numA = toNumber(a);
    const numB = toNumber(b);
    if (numA === null || numB === null) return "Giá trị không hợp lệ";
    return numA * numB;
  }
  
  function divide(a: number | string, b: number | string): number | string {
    const numA = toNumber(a);
    const numB = toNumber(b);
    if (numA === null || numB === null) return "Giá trị không hợp lệ";
    if (numB === 0) return "Không thể chia cho 0";
    return numA / numB;
  }
  