let a = Number(prompt("nhập số a: "));
let b = Number(prompt("nhập số b: "));
let c = Number(prompt("nhập số c: "));
if (a == 0) {
    alert("Đây không phải phương trình bậc hai!");
} else {
    let delta = Math.pow(b, 2) - 4 * a * c; 
    if (delta < 0) {
        alert("Phương trình vô nghiệm");
    } else if (delta == 0) {
        let x = -b / (2 * a); 
        alert("Phương trình có nghiệm kép: x = " + x);
    } else {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a); 
        let x2 = (-b - Math.sqrt(delta)) / (2 * a); 
        alert("Phương trình có 2 nghiệm phân biệt:\n x1 = " + x1 + "\n x2 = " + x2);
    }
}
