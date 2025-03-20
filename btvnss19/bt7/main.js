let a = Number(prompt("Nhập số thứ nhất:"));
let b = Number(prompt("Nhập số thứ hai:"));
let c = Number(prompt("Nhập số thứ ba:"));
let max = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);
alert("Số lớn nhất trong 3 số là " +max);
