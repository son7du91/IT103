let menu = `================== menu ===================\n`
    + `1. thêm sản phẩm vào danh sách sản phẩm.\n`
    + `2. hiển thị tất cả sản phẩm.\n`
    + `3. hiển thị chi tiết sản phẩm theo id.\n`
    + `4. cập nhật thông tin sản phẩm theo id.\n`
    + `5. xóa sản phẩm theo id.\n`
    + `6. lọc sản phẩm theo khoảng giá.\n`
    + `7. thoát.\n`
    + `\n============================================\n`
    + `\nlựa chọn của bạn:   `;
let products = [];
while (true) {
    let choice = Number(prompt(menu));
    switch (choice) {
        case 1:
            add_product();
            break;
        case 2:
            show_all_products();
            break;
        case 3:
            show_product_by_id();
            break;
        case 4:
            update_product();
            break;
        case 5:
            delete_product();
            break;
        case 6:
            filter_by_price();
            break;
        case 7:
            alert("hẹn gặp lại bạn!");
            break;
        default:
            alert("lựa chọn không hợp lệ, vui lòng nhập lại!");
    }
    if (choice == 7) break;
}
function add_product() {
    let id = Number(prompt("nhập id sản phẩm:"));
    let name = prompt("nhập tên sản phẩm:").toLowerCase();
    let price = Number(prompt("nhập giá sản phẩm:"));
    let category = prompt("nhập danh mục sản phẩm:").toLowerCase();
    let quantity = Number(prompt("nhập số lượng sản phẩm:"));

    products.push({ id, name, price, category, quantity });
    alert("thêm sản phẩm thành công!");
}
function show_all_products() {
    if (products.length === 0) {
        alert("không có sản phẩm nào!");
        return;
    }
    let result = "danh sách sản phẩm:\n";
    products.forEach((p) => {
        result += `id: ${p.id}, tên: ${p.name}, giá: ${p.price}, danh mục: ${p.category}, số lượng: ${p.quantity}\n`;
    });
    alert(result);
}
function show_product_by_id() {
    let id = Number(prompt("nhập id sản phẩm cần tìm:"));
    let product = products.find(p => p.id === id);
    if (product) {
        alert(`id: ${product.id}\ntên: ${product.name}\ngiá: ${product.price}\ndanh mục: ${product.category}\nsố lượng: ${product.quantity}`);
    } else {
        alert("không tìm thấy sản phẩm!");
    }
}
function update_product() {
    let id = Number(prompt("nhập id sản phẩm cần cập nhật:"));
    let product = products.find(p => p.id === id);
    if (product) {
        product.name = prompt("nhập tên mới:", product.name).toLowerCase();
        product.price = Number(prompt("nhập giá mới:", product.price));
        product.category = prompt("nhập danh mục mới:", product.category).toLowerCase();
        product.quantity = Number(prompt("nhập số lượng mới:", product.quantity));
        alert("cập nhật sản phẩm thành công!");
    } else {
        alert("không tìm thấy sản phẩm!");
    }
}
function delete_product() {
    let id = Number(prompt("nhập id sản phẩm cần xóa:"));
    let index = products.findIndex(p => p.id === id);
    if (index !== -1) {
        products.splice(index, 1);
        alert("xóa sản phẩm thành công!");
    } else {
        alert("không tìm thấy sản phẩm!");
    }
}
function filter_by_price() {
    let min_price = Number(prompt("nhập giá thấp nhất:"));
    let max_price = Number(prompt("nhập giá cao nhất:"));
    let filtered_products = products.filter(p => p.price >= min_price && p.price <= max_price);
    if (filtered_products.length > 0) {
        let result = "sản phẩm trong khoảng giá:\n";
        filtered_products.forEach((p) => {
            result += `id: ${p.id}, tên: ${p.name}, giá: ${p.price}, danh mục: ${p.category}, số lượng: ${p.quantity}\n`;
        });
        alert(result);
    } else {
        alert("không có sản phẩm nào trong khoảng giá này!");
    }
}
