function addsubject() {
    let subjectInput = document.getElementById("input").value;
    if (subjectInput.trim() === "") {
        alert("tên môn học không được để trống!");
        return;
    }
    let subjectList = document.getElementById("tasklist");
    let newsubject = document.createElement("li");
    newsubject.innerText = subjectInput;
    subjectList.appendChild(newsubject);
    document.getElementById("input").value = "";
}