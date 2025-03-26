let array = prompt("nhập dãy số bất kì: "); 
if (isNaN(Number(array))) {  
    console.log(" nhập một dãy số .");
} else {
    let max = 0; 
    array.split("").forEach(num => { 
        if (Number(num) > max) {  
            max = Number(num); 
        }
    });
    console.log(`số lớn nhất trong dãy: ${max}`);
}
