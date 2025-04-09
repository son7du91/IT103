function showimage(src) {
    document.getElementById("largeimage").src = src;
    document.getElementById("overlay").style.visibility = "visible";
}
function hideimage() {
    document.getElementById("overlay").style.visibility = "hidden";
}