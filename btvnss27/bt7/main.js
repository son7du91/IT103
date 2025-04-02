function timsobithiieu(arr) {
    let n = arr.length + 1;
    let tongmongdoi = (n * (arr[0] + arr[arr.length - 1])) / 2;

    let tongthucte = arr.reduce((tong, so) => tong + so, 0);

    return tongmongdoi - tongthucte;
}
let arr = [1, 2, 3, 4, 6];
console.log("mảng:", arr);
console.log("số bị thiếu:", timsobithiieu(arr));
