let str = "";
let choice;
do {
    console.log("chọn chức năng:");
    console.log("1. nhập chuỗi");
    console.log("2. hiển thị chuỗi");
    console.log("3. tính độ dài của chuỗi");
    console.log("4. đếm số lần xuất hiện của một ký tự trong chuỗi");
    console.log("5. kiểm tra chuỗi có phải là chuỗi đối xứng không");
    console.log("6. chuyển đổi chuỗi thành chữ in hoa các ký tự đầu tiên của từ");
    console.log("7. thoát chương trình");
    choice = Number(prompt("nhập lựa chọn của bạn: "));
    if (choice === 1) {
        str = prompt("nhập chuỗi:");
    } else if (choice === 2) {
        console.log("chuỗi hiện tại:", str);
    } else if (choice === 3) {
        console.log("độ dài của chuỗi:", str.length);
    } else if (choice === 4) {
        let char = prompt("nhập ký tự cần đếm:");
        let count = 0;
        for (let i = 0; i < str.length; i++) {
            if (str[i] === char) {
                count++;
            }
        }
        console.log(`ký tự '${char}' xuất hiện:`, count, "lần");
    } else if (choice === 5) {
        let reversed = str.split('').reverse().join('');
        let isSymmetric = false;
        if (str === reversed) {
            isSymmetric = true;
        }
        console.log("chuỗi có đối xứng không:", isSymmetric ? "có" : "không");
    } else if (choice === 6) {
        let words = str.split(' ');
        let converted = "";
        for (let i = 0; i < words.length; i++) {
            if (words[i].length > 0) {
                converted += words[i][0].toUpperCase() + words[i].slice(1) + " ";
            }
        }
        converted = converted.trim();
        console.log("chuỗi sau khi chuyển đổi:", converted);
    } else if (choice === 7) {
        console.log("thoát chương trình.");
    } else {
        console.log("lựa chọn không hợp lệ!");
    }
} while (choice !== 7);
