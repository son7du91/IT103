function checkemail(arr) {
    if (!Array.isArray(arr)) {
        return "gia tri ko hop le";
    }
    if (arr.length === 0) {
        return "mang ko chua phan tu";
    }
    let emailRegex = /^[^\s@]+@[^\s@]+\.(com|net)$/;
    for (let i in arr){
        if (!emailRegex.test(arr[i])) {
            return ("Email khong hop le! Vui long nhap dia chi email dung.");
        }
            alert(`${arr[i]}`);
    }
}
let input =["john.doe@gmail.com", "invalidemail.com", "hello@domain.net", "space@out.com"];
checkemail(input);