let arr = [];
let choice;
do {
    console.log("chọn chức năng:");
    console.log("1. nhập mảng 2 chiều");
    console.log("2. hiển thị mảng 2 chiều");
    console.log("3. tính tổng các phần tử trong mảng");
    console.log("4. tìm phần tử lớn nhất trong mảng và chỉ số của nó");
    console.log("5. tính trung bình cộng các phần tử của một hàng cụ thể");
    console.log("6. đảo ngược các hàng trong mảng");
    console.log("7. thoát chương trình");
    choice = Number(prompt("nhập lựa chọn của bạn: "));
    if (choice === 1) {
        let rows = Number(prompt("nhập số hàng của mảng: "));
        let cols = Number(prompt("nhập số cột của mảng: "));
        arr = [];
        for (let i = 0; i < rows; i++) {
            let row = prompt(`nhập các phần tử của hàng ${i + 1}, cách nhau bởi dấu phẩy:`);
            arr.push(row.split(",").map(Number));
        }
    } else if (choice === 2) {
        console.log("mảng 2 chiều hiện tại:");
        arr.forEach(row => console.log(row));
    } else if (choice === 3) {
        let total = arr.flat().reduce((sum, num) => sum + num, 0);
        console.log("tổng các phần tử trong mảng:", total);
    } else if (choice === 4) {
        let max = Math.max(...arr.flat());
        let indices = [];
        arr.forEach((row, i) => {
            row.forEach((value, j) => {
                if (value === max) indices.push(`[${i}, ${j}]`);
            });
        });
        console.log("phần tử lớn nhất:", max);
        console.log("chỉ số của nó:", indices);
    } else if (choice === 5) {
        let rowIndex = Number(prompt("nhập chỉ số hàng để tính trung bình cộng:"));
        if (rowIndex >= 0 && rowIndex < arr.length) {
            let row = arr[rowIndex];
            let avg = row.reduce((sum, num) => sum + num, 0) / row.length;
            console.log(`trung bình cộng các phần tử của hàng ${rowIndex}:`, avg);
        } else {
            console.log("chỉ số hàng không hợp lệ!");
        }
    } else if (choice === 6) {
        arr = arr.map(row => row.reverse());
        console.log("mảng sau khi đảo ngược các hàng:");
        arr.forEach(row => console.log(row));
    } else if (choice === 7) {
        console.log("thoát chương trình.");
    } else {
        console.log("lựa chọn không hợp lệ!");
    }
} while (choice !== 7);
