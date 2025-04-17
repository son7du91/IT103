function validateregistration(email, password, check) {
    if (!email || !password || !check) {
        alert('không được bỏ trống.');
        return false;
    }
    if (password !== check) {
        alert('mật khẩu không khớp. vui lòng thử lại.');
        return false;
    }
    if (emailexists(email)) {
        alert('email này đã được đăng ký. vui lòng sử dụng email khác.');
        return false;
    }
    return true;
}
function emailexists(email) {
    const users = json.parse(localstorage.getitem('users')) || [];
    return users.some(user => user.email === email);
}
function registeruser(email, password) {
    const users = json.parse(localstorage.getitem('users')) || [];
    users.push({ email, password });
    localstorage.setitem('users', json.stringify(users));
    alert('đăng ký thành công!');
}
document.getelementbyid('registerbutton').addeventlistener('click', () => {
    const email = document.getelementbyid('inputemail').value;
    const password = document.getelementbyid('inputpassword').value;
    const confirmpassword = document.getelementbyid('inputcheck').value;
    if (validateregistration(email, password, confirmpassword)) {
        registeruser(email, password);
    }
});
