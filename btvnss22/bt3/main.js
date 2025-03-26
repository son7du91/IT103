let array = prompt("nhập dãy số bất kì: ");
let newarray = "";  
if (isNaN(Number(array))) { 
    console.log("nhập một dãy số.");
} else {
    newarray = array.split("").reverse().join(""); 
    console.log(newArray);
}
