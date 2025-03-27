let n = parseInt(prompt("nhập số lượng phần tử của mảng:"));
if (isNaN(n) || n < 0) {
    console.log("số lượng phần tử không hợp lệ");
} else if (n === 0) {
    console.log("không có ký tự số");
} else {
    let input = prompt(`nhập ${n} ký tự, cách nhau bởi dấu cách:`);
    let b = input.split(" ");
    if (b.length !== n) {
        console.log("số lượng phần tử nhập vào không khớp!");
    } else {
        let result = [];
        for (let i = 0; i < n; i++) {
            if (b[i] >= '0' && b[i] <= '9') { 
                result.push(b[i]);
            }
        }
        if (result.length > 0) {
            console.log(result.join(" "));
        } else {
            console.log("không có ký tự số");
        }
    }
}
