let arrays = [[2, 5, 7, 4, 1, 8, 6, 2, 5, 7]];
for (let i = 0; i < arrays.length; i++) {
    let arr = arrays[i];
    console.log("sau khi sắp xép:", arr.slice().sort((a, b) => a - b));
}