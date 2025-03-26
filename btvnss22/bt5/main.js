let a = [1,2,3,4,5];
suml = 0
sumc = 0
for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 == 0) {
        sumc += a[i];
    }
    if (a[i] % 2 !=0) {
        suml += a[i]
    }
}
console.log(sumc);
console.log(suml);
