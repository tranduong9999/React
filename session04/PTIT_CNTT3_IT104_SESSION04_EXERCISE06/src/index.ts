type Product = {
    id: string;

    name: string;

    price: number;

    category: {

      id: string;

      name: string;

 };

    discount?: number; 

};

function getFinalPrice(product: Product): number {
    if(product.discount){
        return product.price * (1-product.discount)
        
    } else {
        return product.price;
        
    }
}

function printProductInfo(product: Product): void {
    const GiaGoc = product.price.toLocaleString("vi-VN") + "VND";
    const GiaSauKhiGiam = getFinalPrice(product).toLocaleString("vi-VN") + " VND";

    console.log(`Tên: ${product.name}`);
    console.log(`Giá gốc: ${GiaGoc}`);

    if (product.discount) {
        console.log(`Giá sau giảm: ${GiaSauKhiGiam}`);
    }

    console.log(`Danh mục: ${product.category.name}`);
}

const listProduct: Product[] = [
    {
        id: "1",
        name: "Áo sơ mi",
        price: 300000,
        discount: 0.2,
        category: { id: "c1", name: "Thời trang nam" }
    },
    {
        id: "2",
        name: "Quần jeans",
        price: 500000,
        category: { id: "c2", name: "Thời trang nữ" }
    },
    {
        id: "3",
        name: "Giày thể thao",
        price: 800000,
        discount: 0.1,
        category: { id: "c3", name: "Phụ kiện" }
    }
];

for (let product of listProduct) {
    printProductInfo(product);
    console.log("--------------");
}