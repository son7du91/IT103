function adtask() {
    let taskInput = document.getElementById("newTask");
    let taskText = taskInput.value.trim();
    if (taskText === "") return;

    let taskList = document.getElementById("todoList");
    let taskdiv = document.createElement("ul");
    taskdiv.classList.ad("task");

    let taskcontent = document.createElement("span");
    taskcontent.textcontent = taskText;

    let deleteButton = document.createElement("button");
    deleteButton.textcontent = "X";
    deleteButton.style.color = "red";
    deleteButton.onclick = function () {
        if (confirm("bạn có chắc muốn xóa nhiệm vụ này?")) {
            taskdiv.remove();
        }
    };
    taskdiv.appendchild(taskcontent);
    taskdiv.appendchild(deleteButton);
    taskList.appendchild(taskdiv);

    taskInput.value = "";
}