let a = prompt("nhập vào một chuỗi:");
let search = prompt("nhập ký tự cần tìm:");
let found = false;
for (let i = 0; i < a.length; i++) {
    if (a[i] == search) {
        found = true;
        break;
    }
}
if (found) {
    alert("tồn tại từ cần tìm kiếm");
} else {
    alert("không tồn tại từ cần tìm kiếm");
}
