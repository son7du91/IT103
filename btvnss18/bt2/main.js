let T = Number (prompt("nhập điểm toán: "));
let v = Number (prompt("nhập điểm văn : "));
let A = Number (prompt("nhập điểm anh : "));
let resul = (T + v + A) /3 ;
if (resul >= 8) {
    alert("học lực giỏi");
} else if (resul >= 6.5) {  
    alert("học lực khá");   
} else if (resul >= 5) { 
    alert("học lực trung bình");
} else {
    alert("học lực yếu");
}