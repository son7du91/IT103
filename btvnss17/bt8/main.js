let date1 = prompt("nhập năm, tháng, ngày thứ 1: ");
let date2 = prompt("nhập năm, tháng, ngày thứ 2: ");

let d1 = new Date(date1);
let d2 = new Date(date2);

let result = Math.abs(d2-d1);

alert((result / (1000 * 60 * 60 * 24)));