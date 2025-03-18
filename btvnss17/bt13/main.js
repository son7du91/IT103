let a = prompt("nhập vào số tiền cần gửi");
let b = prompt("nhập vào số tháng cần gửi");

let year = Math.floor(b / 12);

let interest = ( 4.3 / 100 * year *a);
alert("số tiền lãi là: " + interest + " VND" );