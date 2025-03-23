let a = prompt("nhập vào một số nguyên: ");
let number = parseInt(a);
if (isNaN(number)) {
    alert("số không hợp lệ");
} else {
    let reversed = "";
    let length = a.length;
    for (let i = length - 1; i >= 0; i--) {
        reversed = reversed + a[i];
    }
    if (a == reversed) {
        alert("là số đối xứng");
    } else {
        alert("lhông phải số đối xứng");
    }
}
