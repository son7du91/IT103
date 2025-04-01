function filterevennumbers(arr) {
    if (!Array.isArray(arr)) {
        return "dữ liệu không hợp lệ";
    }
    let evennumbers = arr.filter(num => Number.isInteger(num) && num % 2 === 0);
    return evennumbers.length > 0 ? evennumbers.join(", ") : "mảng không chứa số chẵn";
}
console.log(filterevennumbers([11, 4, 65, 6]));
console.log(filterevennumbers([1, 3, 5, 17]));
console.log(filterevennumbers("text"));
