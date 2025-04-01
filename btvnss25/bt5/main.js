function countintegers(arr) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (Number.isInteger(arr[i]) && arr[i] > 0) count++
    }
    if (count === 0) return "không có số nguyên dương trong mảng"
    return count
}

console.log(countintegers([4, 5.4, 6, -2]))
console.log(countintegers([1, 2, 5, 7, -8, 6]))
console.log(countintegers([1.2, -3, -6]))
