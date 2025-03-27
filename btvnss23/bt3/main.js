let a = parseInt(prompt("nhập số lượng phần tử của mảng:"));
if (isNaN(a) || a < 0) {
    console.log("số lượng phần tử không hợp lệ");
} else if (a === 0) {
    console.log("mảng không có phần tử");
} else {
    let input = prompt(`nhập ${a} số, cách nhau bởi dấu cách:`);
    let b = input.split(" ");
    if (b.length !== a) {
        console.log("số lượng phần tử nhập vào không khớp!");
} else {
        let count = 0;
        for (let i = 0; i < a; i++) {
        let num = parseFloat(b[i]); 
            if (!isNaN(num) && num < 0 && num === Math.floor(num)) { 
                count++;
            }
        }
        console.log(count);
    }
}
