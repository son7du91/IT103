function login() {
    let usernames = "huanrose@gmail.com";
    let Password = "123456";
    let username = document.getElementById("exampleFormControlInput1").value;
    let password = document.getElementById("inputPassword5").value;
    if(username === usernames && password === Password){
        console.log("dang nhap thanh cong");
    } else {
        console.log("dang nhap ko thanh cong");
    }
}