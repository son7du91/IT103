let accounts = json.parse(localstorage.getitem("users")) || [];
function clearerrors() {
    let emailerror = document.getelementbyid("emailerror");
    let passworderror = document.getelementbyid("passworderror");
    let emailinput = document.getelementbyid("email");
    let passwordinput = document.getelementbyid("password");

    if (emailerror) emailerror.style.display = "none";
    if (passworderror) passworderror.style.display = "none";
    if (emailinput) emailinput.classlist.remove("valid", "invalid");
    if (passwordinput) passwordinput.classlist.remove("valid", "invalid");
}
function validatelogin(event) {
    event.preventdefault();
    let email = event.target.email.value;
    let password = event.target.password.value;
    let isvalid = true;
    clearerrors();
    if (!email) {
        document.getelementbyid("emailerror").textcontent = "vui lòng nhập email.";
        document.getelementbyid("emailerror").style.display = "block";
        document.getelementbyid("email").classlist.add("invalid");
        isvalid = false;
    }
    if (!password) {
        document.getelementbyid("passworderror").textcontent = "vui lòng nhập mật khẩu.";
        document.getelementbyid("passworderror").style.display = "block";
        document.getelementbyid("password").classlist.add("invalid");
        isvalid = false;
    }
    if (isvalid) {
        let account = accounts.find(acc => acc.email === email && acc.password === password);
        if (!account) {
            document.getelementbyid("passworderror").textcontent = "email hoặc mật khẩu không chính xác.";
            document.getelementbyid("passworderror").style.display = "block";
            document.getelementbyid("email").classlist.add("invalid");
            document.getelementbyid("password").classlist.add("invalid");
            isvalid = false;
        }
    }
    if (isvalid) {
        localstorage.setitem("loggedinuser", email);
        window.location.href = "index.html";
    }
    return isvalid;
}
