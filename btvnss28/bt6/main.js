let cart = [
    { name: "mèn mén", price: 30000, quantity: 2 },
    { name: "mì tôm", price: 5000, quantity: 1 },
    { name: "bánh bao", price: 15000, quantity: 3 }
];
function sumproduct() {
    let total = 0;
    for(let i = 0; i < cart.length; i++){
        total += cart[i].price * cart[i].quantity;
    }
    return total;
}
let total = sumproduct();
console.log(total);

