let a = Number(prompt("nhập vào số thứ 1: "));
let b = Number(prompt("nhập vào số thứ 2: "));
let c = Number(prompt("nhập vào số thứ 3: "));
let d = Number(prompt("nhập vào số thứ 4: "));
let e = Number(prompt("nhập vào số thứ 5: "));
sumc = 0;
suml= 0;
if (a % 2 == 0) {
    sumc +=a
} else {
    suml +=a
}
if (b % 2 == 0) {
    sumc +=b
} else {
    suml +=b
}
if (c % 2 == 0) {
    sumc +=c
} else {
    suml +=c
}
if (d % 2 == 0) {
    sumc +=d
} else {
    suml +=d
}
if (e % 2 == 0) {
    sumc +=e
} else {
    suml +=e
}
alert(`tổng số chẵn là: ${sumc}, tổng số lẻ là: ${suml} `)