function lonnhat(arr) {
    if (!Array.isArray(arr)) {
        return "du lieu ko hop le"; 
    }
    if (arr.length === 0) {
        return "mang ko chua phan tu";
    }
    let max = Math.max(...arr);
    let position = arr.indexOf(max); 
    alert(`max: ${max}, position: ${position}`);
}
let input = [10, 9, 30, 11, 24, 5];
lonnhat(input);