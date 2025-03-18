let a = Number(prompt("nhập số a:"));
let b = Number(prompt("nhập số b:"));
let c = Number(prompt("nhập số c:"));
let dental = Number(Math.pow(b, 2) - 4 * a * c);
let x1 = (-b + (Math.sqrt(dental)) / 2 * a);
let x2 = (-b - (Math.sqrt(dental)) / 2 * a);
alert("nghiệm thứ 1 " +  x1 + "\n" + "nghiệm thứ 2 "+  x2);