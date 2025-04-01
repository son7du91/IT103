function kitudai5(arr) {
    if (!Array.isArray(arr)) {
        return "gia tri ko hop le";
    }
    if (arr.length === 0) {
        return "mang ko chua phan tu";
    }
    for (let i in arr){
        if(arr[i].length > 5){
            alert(`${arr[i]}`);
        }
    }
}
let input = ["apple", "banana", "cat", "elephant", "dog"];
kitudai5(input);