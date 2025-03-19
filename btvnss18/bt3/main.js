let a = prompt("nhập  tài khoản: ");
let c = "admin";
let d = "themaster";
if (a == c) {
    let b = prompt("nhập mật khẩu: ");
    if (b == d) {
        alert("wellcome");
    } else if (b == null) {
        alert("cancelled");
    }
    else {
        alert("wrong password")
    }
} else if (a == null || a.length==0) {
    alert("cancelled");
} else {
    alert("i dont know you");
}
