"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateOrderTotal(order) {
    let total = 0;
    for (let item of order.items) {
        total += item.product.price * item.quantity;
    }
    return total;
}
function printOrder(order) {
    console.log(`Đơn hàng: #${order.orderId}`);
    console.log(`Khách hàng: ${order.customerName}`);
    console.log(`Sản phẩm:`);
    for (let item of order.items) {
        const name = item.product.name;
        const qty = item.quantity;
        const totalPrice = (item.product.price * qty).toLocaleString("vi-VN");
        console.log(`- ${name} x ${qty} → ${totalPrice} VND`);
    }
    const grandTotal = calculateOrderTotal(order).toLocaleString("vi-VN");
    console.log(`Tổng cộng: ${grandTotal} VND`);
    if (order.note) {
        console.log(`Ghi chú: ${order.note}`);
    }
}
const product1 = { id: "P1", name: "Áo sơ mi", price: 250000 };
const product2 = { id: "P2", name: "Quần tây", price: 400000 };
const order = {
    orderId: "ORD001",
    customerName: "Nguyễn Văn A",
    items: [
        { product: product1, quantity: 2 },
        { product: product2, quantity: 1 }
    ],
    note: "Giao sau 18h"
};
printOrder(order);
//# sourceMappingURL=index.js.map