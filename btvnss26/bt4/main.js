function numbers(arr) {
    if (!Array.isArray(arr)) {
        return "du lieu ko hop le"; 
    }
    if (arr.length === 0) {
        return "mang ko chua phan tu";
    }
    function number1(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
    let primes = arr.filter(number1);
    return primes.length > 0 ? alert(primes) : "mang ko co phan tu nao";
}
let input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers(input);