let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

window.onload = function () {
    render_tasks();
};
function add_task() {
    let input = document.getElementById('task-input');
    let task = input.value.trim();
    if (task === '') {
        alert('vui lòng nhập công việc!');
        return;
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    input.value = '';
    render_tasks();
}
function render_tasks() {
    const task_list = document.getElementById('task-list');
    task_list.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task}</span>
            <div>
                <button onclick="edit_task(${index})">sửa</button>
                <button onclick="delete_task(${index})">xóa</button>
            </div>
        `;
        task_list.appendChild(li);
    });
}
function delete_task(index) {
    const confirm_delete = confirm('bạn có chắc chắn muốn xóa công việc này không?');
    if (confirm_delete) {
        tasks.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        render_tasks();
    }
}
function edit_task(index) {
    const updated_task = prompt('chỉnh sửa công việc:', tasks[index]);
    if (updated_task !== null && updated_task.trim() !== '') {
        tasks[index] = updated_task.trim();
        localStorage.setItem('tasks', JSON.stringify(tasks));
        render_tasks();
    }
}
