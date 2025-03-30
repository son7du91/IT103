let arr = [];
let choice;
do {
    console.log("chọn chức năng:");
    console.log("1. nhập mảng");
    console.log("2. hiển thị mảng");
    console.log("3. tìm max/min");
    console.log("4. tính tổng");
    console.log("5. đếm số lần xuất hiện");
    console.log("6. sắp xếp");
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
        console.log("mảng hiện tại: ", arr);
    } else if (choice === 3) {
        if (arr.length === 0) {
            console.log("mảng trống!");
    } else {
            let max = Math.max(...arr);
            let min = Math.min(...arr);
            console.log("phần tử lớn nhất:", max);
            console.log("phần tử nhỏ nhất:", min);
        }
    } else if (choice === 4) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        console.log("tổng các phần tử: ", sum);
    } else if (choice === 5) {
        let num = Number(prompt("nhập số cần đếm: "));
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === num) {
                count++;
            }
        }
        console.log("số", num, "xuất hiện", count, "lần");
    } else if (choice === 6) {
        arr.sort(function(a, b) {
            return a - b;
        });
        console.log("mảng sau khi sắp xếp: ", arr);
    } else if (choice === 7) {
        console.log("thoát chương trình");
    } else {
        console.log("lựa chọn không hợp lệ!");
    }
} while (choice !== 7);