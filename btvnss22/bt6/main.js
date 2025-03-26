let a = [1, 1, 1, 2, 2, 3, 1, 12, 12, 5];
let n = Number(prompt("Nhập vào số bất kì: "));
let count = 0

for (let i = 0; i < a.length; i++) {
    if (a[i] === n) {
        count++
    }
}
console.log(`số lần xuất hiện số ${n} là: ${count}`);


