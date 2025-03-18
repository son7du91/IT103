let r = prompt("nhập vào bán kính");
let h = prompt("nhập vào chiều cao");
let Sxq = 2 * (Math.PI) * r * h
let Stp = (2 * (Math.PI) * r * h) + (2 * (Math.PI) * r * r);
let v = (Math.PI) * r * r * h
let c = 2 * (Math.PI) * r
alert("diện tích xung quanh: " + Sxq);
alert("diện tích toàn phần: " + Stp);
alert("thể tích hình trụ: " + v);
alert("chu vi đáy: " + c);


