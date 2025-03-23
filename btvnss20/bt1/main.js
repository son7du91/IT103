let a = parseInt(prompt("nhập một số nguyên dương: "));
if (isNaN(a) || a <= 0) {
    alert(" nhập số dương.");
} else {
    let sum = 0;
    for (let i = 1; i <= a; i++) {
        sum += i;
    }
    alert("tổng các số từ 1 đến "+ a +"là" + sum );
}
