let array = [1, 2, 3, 5, 3, 6, 8, 0];
let max = array[0];
let indexMax = 0;
for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
        max = array[i];
        indexMax = i; 
    }
}
console.log(`số lớn nhất trong dãy: ${max}`);
console.log(`vị trí của nó trong mảng: ${indexMax}`);
