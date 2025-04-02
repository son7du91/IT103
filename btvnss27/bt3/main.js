function menu() {
    let choice;
    do {
        choice = prompt("Chọn chức năng:\n1. Tính diện tích hình tròn\n2. Tính chu vi hình tròn\n3. Tính diện tích hình chữ nhật\n4. Tính chu vi hình chữ nhật\n5. Thoát");
        switch (choice) {
            case '1':
                tinhDienTichHinhTron();
                break;
            case '2':
                tinhChuViHinhTron();
                break;
            case '3':
                tinhDienTichHinhChuNhat();
                break;
            case '4':
                tinhChuViHinhChuNhat();
                break;
            case '5':
                alert("Chương trình kết thúc!");
                break;
            default:
                alert("Vui lòng chọn số từ 1 đến 5!");
        }
    } while (choice !== '5');
}
function tinhDienTichHinhTron() {
    let banKinh = parseFloat(prompt("Nhập bán kính hình tròn:"));
    if (!isNaN(banKinh) && banKinh > 0) {
        let dienTich = Math.PI * banKinh * banKinh;
        alert(`Diện tích hình tròn là: ${dienTich.toFixed(2)}`);
    } else {
        alert("Bán kính không hợp lệ!");
    }
}
function tinhChuViHinhTron() {
    let banKinh = parseFloat(prompt("Nhập bán kính hình tròn:"));
    if (!isNaN(banKinh) && banKinh > 0) {
        let chuVi = 2 * Math.PI * banKinh;
        alert(`Chu vi hình tròn là: ${chuVi.toFixed(2)}`);
    } else {
        alert("Bán kính không hợp lệ!");
    }
}
function tinhDienTichHinhChuNhat() {
    let chieuRong = parseFloat(prompt("Nhập chiều rộng hình chữ nhật:"));
    let chieuDai = parseFloat(prompt("Nhập chiều dài hình chữ nhật:"));
    if (!isNaN(chieuRong) && !isNaN(chieuDai) && chieuRong > 0 && chieuDai > 0) {
        let dienTich = chieuRong * chieuDai;
        alert(`Diện tích hình chữ nhật là: ${dienTich.toFixed(2)}`);
    } else {
        alert("Kích thước không hợp lệ!");
    }
}
function tinhChuViHinhChuNhat() {
    let chieuRong = parseFloat(prompt("Nhập chiều rộng hình chữ nhật:"));
    let chieuDai = parseFloat(prompt("Nhập chiều dài hình chữ nhật:"));
    if (!isNaN(chieuRong) && !isNaN(chieuDai) && chieuRong > 0 && chieuDai > 0) {
        let chuVi = 2 * (chieuRong + chieuDai);
        alert(`Chu vi hình chữ nhật là: ${chuVi.toFixed(2)}`);
    } else {
        alert("Kích thước không hợp lệ!");
    }
}
menu();