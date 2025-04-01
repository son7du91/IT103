function number(arr) {
    if (!Array.isArray(arr)) {
        return "du lieu ko hop le";
    }
    if (arr.length === 0) {
        return "mang ko chua phan tu";
    }
    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
    function lePrime(num) {
        return num % 2 !== 0;
    }
    let result = arr.filter(num => isPrime(num) && lePrime(num));
    if (result.length > 0) {
        alert(result);
    } else {
        alert("mang ko co gia tri nao la so le va nguyen to");
    }
}
let input = [10, 2, 3, 5, 7, 9];
number(input);