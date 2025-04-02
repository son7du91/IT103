function kiemtradaysocapso(arr) {
    if (!Array.isArray(arr) || arr.length < 2 || !arr.every(Number.isInteger)) {
        return "dữ liệu không hợp lệ";
    }
    let hieu = arr[1] - arr[0];
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] !== hieu) {
            return false;
        }
    }
    return true;
}
console.log(kiemtradaysocapso([2, 4, 6, 8]));
console.log(kiemtradaysocapso([3, 6, 9, 12, 14]));
console.log(kiemtradaysocapso("abc"));
