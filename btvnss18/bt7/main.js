let a = Number(prompt("nhập vào số a: "));
let b = Number(prompt("nhập vào số b: "));
let c = prompt("nhập các phép tính (+,-,*,/): ");
if (c == "+") {
    alert(a + b);
} else if (c == "-") {
    alert(a - b);
} else if(c =="*" ) {
    alert(a * b);
}else if(c == "/" ) {
    alert(a / b);
}else{
    alert("lỗi")
}