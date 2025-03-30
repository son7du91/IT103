let arr = [];
let choice;
do {
    console.log("chọn chức năng:");
    console.log("1. nhập mảng");
    console.log("2. hiển thị mảng");
    console.log("3. tìm số chẵn và lẻ");
    console.log("4. tính trung bình cộng");
    console.log("5. xóa phần tử tại vị trí chỉ định");
    console.log("6. tìm phần tử lớn thứ hai");
    console.log("7. thoát");
    choice = Number(prompt("nhập lựa chọn của bạn: "));
    if (choice === 1) {
        let input = prompt("nhập các số nguyên, cách nhau bởi dấu phẩy:");
        let temp = input.split(",");
        arr = [];
        for (let i = 0; i < temp.length; i++) {
            arr.push(Number(temp[i]));
        }
    } else if (choice === 2) {
        console.log("mảng hiện tại:", arr);
    } else if (choice === 3) {
        let chan = arr.filter(num => num % 2 === 0);
        let le = arr.filter(num => num % 2 !== 0);
        console.log("số chẵn:", chan);
        console.log("số lẻ:", le);
    } else if (choice === 4) {
        let sum = arr.reduce((acc, num) => acc + num, 0);
        let avg = sum / arr.length;
        console.log("trung bình cộng:", avg);
    } else if (choice === 5) {
        let index = parseInt(prompt("nhập vị trí cần xóa:"));
        if (index >= 0 && index < arr.length) {
            arr.splice(index, 1);
            console.log("mảng sau khi xóa:", arr);
        } else {
            console.log("vị trí không hợp lệ!");
        }
    } else if (choice === 6) {
        let uniqueArr = [...new Set(arr)];
        if (uniqueArr.length < 2) {
            console.log("không có phần tử lớn thứ hai.");
        } else {
            uniqueArr.sort((a, b) => b - a);
            console.log("phần tử lớn thứ hai:", uniqueArr[1]);
        }
    } else if (choice === 7) {
        console.log("thoát chương trình.");
    } else {
        console.log("lựa chọn không hợp lệ!");
    }
} while (choice !== 7);
