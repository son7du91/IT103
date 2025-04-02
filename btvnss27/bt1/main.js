function calculate() {
    let choice;
    do {
        choice = prompt("chọn chức năng:\n1. cộng hai số\n2. trừ hai số\n3. nhân hai số\n4. chia hai số\n5. thoát");
        if (choice >= 1 && choice <= 4) {
            let num1 = parseFloat(prompt("nhập số thứ nhất:"));
            let num2 = parseFloat(prompt("nhập số thứ hai:"));
            let result;
            switch (choice) {
                case '1':
                    result = num1 + num2;
                    alert(`kết quả: ${num1} + ${num2} = ${result}`);
                    break;
                case '2':
                    result = num1 - num2;
                    alert(`kết quả: ${num1} - ${num2} = ${result}`);
                    break;
                case '3':
                    result = num1 * num2;
                    alert(`kết quả: ${num1} * ${num2} = ${result}`);
                    break;
                case '4':
                    if (num2 !== 0) {
                        result = num1 / num2;
                        alert(`kết quả: ${num1} / ${num2} = ${result}`);
                    } else {
                        alert("không thể chia cho 0!");
                    }
                    break;
            }
        } else if (choice !== '5') {
            alert("vui lòng chọn số từ 1 đến 5!");
        }
    } while (choice !== '5');
    alert("chương trình kết thúc!");
}

calculate();
