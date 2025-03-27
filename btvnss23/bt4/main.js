let a = parseInt(prompt("nhập số lượng phần tử của mảng:"));
if (isNaN(a) || a < 0) {
    console.log("số lượng phần tử không hợp lệ");
} else if (a === 0) {
    console.log("không có ký tự số");
} else {
    let input = prompt(`nhập ${a} ký tự, cách nhau bởi dấu cách:`);
    let b = input.split(" ");
    if (b.length !== a) {
        console.log("số lượng phần tử nhập vào không khớp!");
    } else {
        let result = "";
        for (let i = 0; i < a; i++) {
            if (b[i] >= '0' && b[i] <= '9') { 
                result += b[i] + " ";
            }
        }
        console.log("không có ký tự số");
    }
}
