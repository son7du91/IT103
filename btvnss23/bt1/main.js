let array = [1, 2, 3, 5, 8, 10, 11, 14, 15, 12, 17];
let found = false;
for (let i = 0; i < array.length; i++) {
    if (array[i] > 10) {
        console.log(`số lớn hơn 10 là: ${array[i]}`);
        found = true;
    }
}
if (!found) {
    console.log("không có số nào lớn hơn 10");
}
