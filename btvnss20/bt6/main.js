let num = parseInt(prompt("nhập vào một số nguyên:"));
if (isNaN(num) || num < 2) {
    alert("Không phải là số nguyên tố");
} else {
    let b = true;
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            b = false;
            break;
        }
    }
    if (b) {
        alert("Là số nguyên tố");
    } else {
        alert("Không phải là số nguyên tố");
    }
}
