function checkbutton() {
  let inputField = document.getElementById("emailinput");
  let email = inputField.value;
  let validRegex = /^[^\s@]+@[^\s@]+\.(com|vn)$/i;
   let existingMessage = document.querySelector(".validationmessage");
   if (existingMessage) {
       existingMessage.remove();
   }
   let messageSpan = document.createElement("span");
   messageSpan.className = "validationmessage";
   if (validRegex.test(email)) {
       messageSpan.textContent = "email hợp lệ!";
       messageSpan.style.color = "green";
   } else {
       messageSpan.textContent = "email không hợp lệ!";
       messageSpan.style.color = "red";
   }
   inputField.insertAdjacentElement("afterend", messageSpan);
}