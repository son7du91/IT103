let number = Number(prompt("nhập số nguyên từ 0 - 999: "));
if (number < 0 || number > 999) {
    alert("nhập số trong khoảng từ 0 đến 999");
} else {
    let tram = Math.floor(number / 100);
    let chuc = Math.floor((number % 100) / 10);
    let donvi = number % 10;
    let result = ""; // kết quả
    // Xử lý hàng trăm   8
    if (tram > 0) {
        if (tram == 1) result += "một trăm";
        else if (tram == 2) result += "hai trăm";
        else if (tram == 3) result += "ba trăm";
        else if (tram == 4) result += "bốn trăm";
        else if (tram == 5) result += "năm trăm";
        else if (tram == 6) result += "sáu trăm";
        else if (tram == 7) result += "bảy trăm";
        else if (tram == 8) result += "tám trăm";
        else if (tram == 9) result += "chín trăm";
    }
    // Xử lý hàng chục và đơn vị
    if (chuc == 0 && donvi > 0 && tram > 0) {
        result += " linh";
    } else if (chuc == 1) {
        result += " mười";
    } else if (chuc > 1) {
        if (chuc === 2) result += " hai mươi";
        else if (chuc == 3) result += " ba mươi";
        else if (chuc == 4) result += " bốn mươi";
        else if (chuc == 5) result += " năm mươi";
        else if (chuc == 6) result += " sáu mươi";
        else if (chuc == 7) result += " bảy mươi";
        else if (chuc == 8) result += " tám mươi";
        else if (chuc == 9) result += " chín mươi";
    }

    // Xử lý hàng đơn vị
    if (donvi > 0) {
        if (chuc !== 1) {
            if (donvi === 1) result += " một";
            else if (donvi == 2) result += " hai";
            else if (donvi == 3) result += " ba";
            else if (donvi == 4) result += " bốn";
            else if (donvi == 5) {
                if (chuc == 0) result += " năm";
                else result += " lăm";
            }
            else if (donvi == 6) result += " sáu";
            else if (donvi == 7) result += " bảy";
            else if (donvi == 8) result += " tám";
            else if (donvi == 9) result += " chín";
        }
    }
    // Trường hợp số 0
    if (number == 0) result = "Không";

    alert(result);
}
