function showmenu() {
    let choice;
    do {
        choice = parseInt(prompt("chọn chức năng:\n1. nhập danh sách số nguyên\n2. tính trung bình các số\n3. tìm số chẵn lớn nhất\n4. tìm số lẻ nhỏ nhất\n5. thoát"), 10);
        switch (choice) {
            case 1:
                nhapdanhsachso();
                break;
            case 2:
                tinhtrungbinh();
                break;
            case 3:
                timsochanlonnhat();
                break;
            case 4:
                timsolenhonhat();
                break;
            case 5:
                console.log("thoát chương trình.");
                break;
            default:
                console.log("lựa chọn không hợp lệ. vui lòng thử lại.");
        }
    } while (choice !== 5);
}
let numbers = [];
function nhapdanhsachso() {
    let input = prompt("nhập danh sách số nguyên, cách nhau bởi dấu phẩy:");
    numbers = input.split(",").map(num => parseInt(num.trim(), 10));
    console.log("danh sách số nguyên:", numbers);
}
function tinhtrungbinh() {
    if (numbers.length === 0) {
        console.log("danh sách rỗng. hãy nhập số trước!");
        return;
    }
    let sum = numbers.reduce((acc, num) => acc + num, 0);
    console.log("trung bình các số:", sum / numbers.length);
}
function timsochanlonnhat() {
    let evens = numbers.filter(num => num % 2 === 0);
    if (evens.length === 0) {
        console.log("không có số chẵn trong danh sách.");
        return;
    }
    console.log("số chẵn lớn nhất:", Math.max(...evens));
}
function timsolenhonhat() {
    let odds = numbers.filter(num => num % 2 !== 0);
    if (odds.length === 0) {
        console.log("không có số lẻ trong danh sách.");
        return;
    }
    console.log("số lẻ nhỏ nhất:", Math.min(...odds));
}
showmenu();
