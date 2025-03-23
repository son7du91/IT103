let a = parseInt(prompt("nhập một số nguyên dương: "));
if (isNaN(a) || a <= 0) {
    alert("nhập số dương.");
} else {
    let result = "";
    for (let i = 1; i <= a; i++) {
        if (i % 5 === 0) {
            result += i + ", ";
        }
    }
    if (result.length > 0) {
        result = result.slice(0, -2);
        alert("số chia hết cho 5 từ 1 đến " + a + " là: " + result);
    } else {
        alert("Không số nào chia hết cho 5 khoảng từ 1 đến " + a + ".");
    }
}
