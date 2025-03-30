let arr = [];
let choice;
do {
    console.log("chọn chức năng:");
    console.log("1. nhập mảng");
    console.log("2. hiển thị mảng");
    console.log("3. tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó");
    console.log("4. tính tổng và trung bình cộng của các số dương trong mảng");
    console.log("5. đảo ngược mảng");
    console.log("6. kiểm tra mảng có đối xứng không");
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
        let max = Math.max(...arr);
        let indices = [];
        arr.forEach((value, index) => {
            if (value === max) indices.push(index);
        });
        console.log("phần tử lớn nhất:", max);
        console.log("chỉ số của nó:", indices);
    } else if (choice === 4) {
        let positiveNumbers = arr.filter(num => num > 0);
        let total = positiveNumbers.reduce((acc, num) => acc + num, 0);
        let avg = positiveNumbers.length > 0 ? total / positiveNumbers.length : 0;
        console.log("tổng các số dương:", total);
        console.log("trung bình cộng các số dương:", avg);
    } else if (choice === 5) {
        arr.reverse();
        console.log("mảng sau khi đảo ngược:", arr);
    } else if (choice === 6) {
        let isSymmetric = arr.join() === arr.slice().reverse().join();
        console.log("mảng có đối xứng không:", isSymmetric ? "có" : "không");
    } else if (choice === 7) {
        console.log("thoát chương trình.");
    } else {
        console.log("lựa chọn không hợp lệ!");
    }
} while (choice !== 7);
