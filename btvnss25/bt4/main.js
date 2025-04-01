function number(n) {
    if (n < 2 || !Number.isInteger(n)) return "dữ liệu không hợp lệ";
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return "không phải là số nguyên tố";
    }
    return "là số nguyên tố";
}
console.log(number(17))
console.log(number(6))
console.log(number("text"))
