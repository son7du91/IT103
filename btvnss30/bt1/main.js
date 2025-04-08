let products = [{ 
    id: 1,
    name: "mèn mén",
    price: 20000,
    quantity: 20,
    category: "món ăn dân tộc mông",
}, {
    id: 2,
    name: "mức",
    price: 80000,
    quantity: 21,
    category: "món ăn dân tộc kinh",
}, {
    id: 3,
    name: "cơm lam",
    price: 40000,
    quantity: 15,
    category: "món ăn dân tộc mông",
}, {
    id: 4,
    name: "bánh đậu xanh",
    price: 60000,
    quantity: 30,
    category: "món ăn dân tộc kinh",
}];
let cart = []; 
function showmenu() {
    let str = products.map((item) => {
        return `${item.id},${item.name},${item.price},${item.quantity},${item.category}\n`
    }).join('');
    alert(str);
}

function chooseproduct() {
    let id = +prompt("nhập vào id sản phẩm bạn muốn mua");
    let product = products.find((item) => item.id == id);
    if (product) {
        let quantity = +prompt("nhập vào số lượng sản phẩm bạn muốn mua");
        if (product.quantity >= quantity) {
            product.quantity -= quantity;
            cart.push({ ...product, quantity });
            alert(`bạn đã mua ${quantity} ${product.name}`);
        } else {
            alert("số lượng sản phẩm không đủ");
        }
    } else {
        alert("sản phẩm không có trong cửa hàng");
    }
}

function sortprice() {
    let choice;
    do {
        choice = +prompt(
            "-----------------------------------------------------\n" +
            "1. sắp xếp theo giá tăng dần.\n" +
            "2. sắp xếp theo giá giảm dần.\n" +
            "3. thoát.\n" +
            "-----------------------------------------------------"
        );
        switch (choice) {
            case 1:
                products.sort((a, b) => a.price - b.price);
                alert("sắp xếp thành công");
                let str = products.map((item) => {
                    return `${item.id},${item.name},${item.price},${item.quantity},${item.category}\n`
                }).join('');
                alert(str);
                break;
            case 2:
                products.sort((a, b) => b.price - a.price);
                alert("sắp xếp thành công");
                let str2 = products.map((item) => {
                    return `${item.id},${item.name},${item.price},${item.quantity},${item.category}\n`
                }).join('');
                alert(str2);
                break;
            case 3:
                break;
            default:
                alert("không có lựa chọn này");
                break;
        }
    } while (choice != 3);
}
function totalprice() {
    let total = 0;
    cart.forEach((item) => {
        total += item.price * item.quantity;
    });
    alert(`tổng tiền thanh toán là: ${total}`);
}

function menu() {
    let choice;
    do {
        alert(
            "-----------------------------------------------------\n" +
            "1. hiển thị các sản phẩm theo tên danh mục.\n" +
            "2. chọn sản phẩm để mua bằng cách nhập id sản phẩm.\n" +
            "3. sắp xếp các sản phẩm trong cửa hàng theo giá.\n" +
            "4. tính số tiền thanh toán trong giỏ hàng.\n" +
            "5. thoát.\n" +
            "-----------------------------------------------------"
        )
        choice = +prompt("nhập vào lựa chọn của bạn");
        switch (choice) {
            case 1:
                showmenu();
                break;
            case 2:
                chooseproduct();
                break;
            case 3:
                sortprice();
                break;
            case 4:
                totalprice();
                break;
            case 5:
                break;
            default:
                alert("không có lựa chọn này");
                break;
        }
    } while (choice != 5);
}
menu();
