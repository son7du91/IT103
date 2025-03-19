let a = Number(prompt("Nhập số a: "));
let b = Number(prompt("Nhập số b: "));
let c = Number(prompt("Nhập số c: "));
if (a > 0 && b > 0 && c > 0) {
    if (a + b > c && a + c > b && b + c > a) {
        if (a == b && b == c) {
            alert("Đây là tam giác đều");
        } else if (a == b || b == c || a == c) {
            alert("Đây là tam giác cân");
        } else if (
            Math.pow(a, 2) + Math.pow(b, 2) == Math.pow(c, 2) || Math.pow(a, 2) + Math.pow(c, 2) == Math.pow(b, 2) || Math.pow(b, 2) + Math.pow(c, 2) == Math.pow(a, 2)
        ) {
            alert("Đây là tam giác vuông");
        } else {
            alert("Đây là tam giác thường");
        }
    } else {
            alert("Ba cạnh này không tạo thành tam giác");
    }
} else {
            alert("Vui lòng nhập số lớn hơn 0");
}
