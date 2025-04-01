function reversed(str) {
    let reversed = str.split("").reverse().join("")
    if (str === reversed) return "là chuỗi đối xứng"
    return "không phải chuỗi đối xứng"
}
let input = prompt("Nhập chuỗi:")
alert(reversed(input))
