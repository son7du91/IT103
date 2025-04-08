let todolist = [
    { id: 1, task: 'hit the gym', completed: false },
    { id: 2, task: 'pay bills', completed: true },
    { id: 3, task: 'meet george', completed: false },
    { id: 4, task: 'buy eggs', completed: false },
    { id: 5, task: 'read a book', completed: false },
    { id: 6, task: 'organize office', completed: false },
];
const todolistelement = document.getElementById('myul');
const addbtn = document.querySelector('.addbtn');
const newtaskinput = document.getElementById('myinput');
function rendertodolist() {
    todolistelement.innerHTML = '';
    todolist.forEach((item) => {
        const li = document.createElement('li');
            li.textContent = item.task;
            li.className = item.completed ? 'checked' : '';
            li.addEventListener('click', () => toggletask(item.id));
        const closebtn = document.createElement('span');
        closebtn.textContent = 'x';
        closebtn.className = 'close';
        closebtn.addEventListener('click', (e) => {
            e.stopPropagation();
            deletetask(item.id);
        });

        li.appendChild(closebtn);
        todolistelement.appendChild(li);
    });
}
function addtask() {
    const task = newtaskinput.value.trim();
    if (task) {
        todolist.push({ id: Date.now(), task, completed: false });
        newtaskinput.value = '';
        rendertodolist();
    } else {
        alert('please enter a task!');
    }
}
function deletetask(id) {
    todolist = todolist.filter((item) => item.id !== id);
    rendertodolist();
}
function toggletask(id) {
    const task = todolist.find((item) => item.id === id);
    if (task) {
        task.completed = !task.completed;
        rendertodolist();
    }
}
addbtn.addEventListener('click', addtask);
rendertodolist();
