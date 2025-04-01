let users = [];

function registerEmail(email) {
    let emailPattern = /^[^\s@]+@[^\s@]+\.(com|vn)$/;
    
    if (!emailPattern.test(email)) {
        console.log("email không hợp lệ!");
        return;
    }
    if (users.includes(email)) {
        console.log("Tài khoản đã tồn tại!");
    } else {
        users.push(email);
        console.log("đăng ký thành công!");
    }
}
registerEmail("test@example.com");
registerEmail("test@example.com");
registerEmail("invalid-email");
registerEmail("user@domain.vn");
