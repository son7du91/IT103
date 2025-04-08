document.getElementById("openModal").onclick = openModal;
document.querySelector(".close").onclick = closeModal;
window.onclick = windowClick;
function openModal() {
    document.getElementById("modal").style.display = "block";
}
function closeModal() {
    document.getElementById("modal").style.display = "none";
}
function windowClick(event) {
    if (event.target === document.getElementById("modal")) {
        closeModal();
    }
}