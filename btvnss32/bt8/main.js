let tasks = [];
function addtask() {
    let taskinput = document.getElementById("taskinput");
    let tasktext = taskinput.value.trim();
    if (tasktext === "") return;

    tasks.push(tasktext);
    rendertasks();
    taskinput.value = "";
}
function edittask(index) {
    let newtext = prompt("nhập nhiệm vụ mới:", tasks[index]);
    if (newtext !== null && newtext.trim() !== "") {
        tasks[index] = newtext.trim();
        rendertasks();
    }
}
function deletetask(index) {
    if (confirm("bạn có chắc muốn xóa nhiệm vụ này?")) {
        tasks.splice(index, 1);
        rendertasks();
    }
}
function rendertasks() {
    let tasklist = document.getElementById("tasklist");
    tasklist.innerHTML = "";
    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        let taskcontent = document.createElement("span");
            taskcontent.textContent = task;
        let editbutton = document.createElement("button");
            editbutton.textContent = "sửa";
            editbutton.onclick = () => edittask(index);

        let deletebutton = document.createElement("button");
        deletebutton.textContent = "xóa";
        deletebutton.onclick = () => deletetask(index);
            li.appendChild(taskcontent);
            li.appendChild(editbutton);
            li.appendChild(deletebutton);
        tasklist.appendChild(li);
    });
}
