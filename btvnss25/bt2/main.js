let a,b;
function sum(a,b) {
   if (isNaN(a) || isNaN(b)) {
    return console.log("dữ liệu ko hợp lệ");
    
   }
   if (!Number.isInteger(a) || !Number.isInteger(b)) {
    return console.log("dữ liệu ko hợp lệ");
  
   }
   return console.log(a+b);
   
}
sum(2,6)
sum(3,"text")
sum(7,-7)
sum(4.5,3)