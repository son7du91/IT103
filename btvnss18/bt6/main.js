let a = prompt("nhập số năm bất kì: ")
if ((a % 400 == 0) || (a % 4 == 0 && a % 100 !== 0)) {
    alert(a + " là năm nhuận");
} else {
    alert(a+" ko phải năm nhuận")
}
