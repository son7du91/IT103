let menucategories = {};

while (true) {
    let choice = Number(prompt(
        "=== quản lý menu nhà hàng ===\n" +
        "1. thêm món ăn\n" +
        "2. xóa món ăn\n" +
        "3. cập nhật món ăn\n" +
        "4. hiển thị toàn bộ menu\n" +
        "5. tìm kiếm món ăn\n" +
        "6. thoát\n\n" +
        "lựa chọn của bạn:"
    ));
    switch (choice) {
        case 1:
            adddish();
            break;
        case 2:
            removedish();
            break;
        case 3:
            updatedish();
            break;
        case 4:
            showmenu();
            break;
        case 5:
            searchdish();
            break;
        case 6:
            alert("hẹn gặp lại!");
            break;
        default:
            alert("lựa chọn không hợp lệ, vui lòng nhập lại!");
    }

    if (choice === 6) break;
}
function adddish() {
    let category = prompt("nhập danh mục món ăn (vd: món chính, đồ uống, tráng miệng):").trim().toLowerCase();
    let name = prompt("nhập tên món ăn:").trim().toLowerCase();
    let price = Number(prompt("nhập giá món ăn:").trim());
    let description = prompt("nhập mô tả món ăn:").trim().toLowerCase();

        if (!menucategories[category]) {
        menucategories[category] = [];
        }

        menucategories[category].push({ name, price, description });
            alert("món ăn đã được thêm vào danh mục " + category);
}
function removedish() {
    let name = prompt("nhập tên món ăn cần xóa:").trim().toLowerCase();
    let found = false;
    for (let category in menucategories) {
        menucategories[category] = menucategories[category].filter(dish => {
            if (dish.name === name) {
                found = true;
                return false;
            }
            return true;
        });
    }
        alert(found ? "đã xóa món ăn." : "không tìm thấy món ăn.");
}
function updatedish() {
    let name = prompt("nhập tên món ăn cần cập nhật:").trim().toLowerCase();
    for (let category in menucategories) {
        let dish = menucategories[category].find(d => d.name === name);
        if (dish) {
            dish.name = prompt("nhập tên mới:", dish.name).trim().toLowerCase();
            dish.price = Number(prompt("nhập giá mới:", dish.price).trim());
            dish.description = prompt("nhập mô tả mới:", dish.description).trim().toLowerCase();
            alert("cập nhật món ăn thành công.");
            return;
        }
    }
        alert("không tìm thấy món ăn.");
}
function showmenu() {
    if (Object.keys(menucategories).length === 0) {
        alert("menu hiện đang trống!");
        return;
    }
    let menutext = "=== menu nhà hàng ===\n";
    for (let category in menucategories) {
        menutext += `\n ${category}\n`;
        menucategories[category].forEach(dish => {
            menutext += ` ${dish.name} - ${dish.price} vnd\n    ${dish.description}\n`;
        });
    }
        alert(menutext);
}
function searchdish() {
    let name = prompt("nhập tên món ăn cần tìm:").trim().toLowerCase();
    let results = [];
    for (let category in menucategories) {
        menucategories[category].forEach(dish => {
            if (dish.name.includes(name)) {
                results.push(` ${category} - ${dish.name} - ${dish.price} vnd\n    ${dish.description}`);
            }
        });
    }
        alert(results.length > 0 ? results.join('\n\n') : "không tìm thấy món ăn.");
}
