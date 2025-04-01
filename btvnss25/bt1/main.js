let a;
function minvalue(a) {
    if (!Array.isArray(a)) {
        return console.log("giá trị không hợp lệ");
    }
    if (a.length === 0) {
        console.log("phần tử rỗng");
        return;
    }
    let min = a[0];
    for (let i = 1; i < a.length; i++) {
        if (a[i] < min) {
            min = a[i];
        }
    }
    console.log(min);
}

minvalue([1, 2, 3, 4, 5]); 
minvalue([]);          
minvalue("abc");
minvalue([5,2,7,5,4])


