function lonhon10(arr) {
    if (!Array.isArray(arr)) {
        return "gia tri ko hop le";
    }
    if (arr.length === 0) {
        return "mang ko chua phan tu";
    }
    for (let i in arr) {
        if (arr[i] > 10) {
            alert(`nhung so lon hon 10 la: ${arr[i]}`);
        }
    }
}
let input = [1,22,12,8,7,9];
lonhon10(input);