let todo_input = document.getElementById("todo-input");
let add_todo_button = document.getElementById("add-todo");
let todo_list = document.getElementById("todo-list");
let load_todos = () => {
    let todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.forEach((todo) => add_todo_to_dom(todo));
};
let save_todos = () => {
    let todos = Array.from(todo_list.children).map(
        (item) => item.querySelector(".todo-text").textContent
    );
    localStorage.setItem("todos", JSON.stringify(todos));
};
let add_todo_to_dom = (todo_text) => {
    let li = document.createElement("li");
    li.className = "todo-item";
    let span = document.createElement("span");
    span.className = "todo-text";
    span.textContent = todo_text;
    let delete_button = document.createElement("button");
    delete_button.className = "delete-button";
    delete_button.textContent = "delete";
    delete_button.onclick = () => {
        li.remove();
        save_todos();
    };
    li.appendChild(span);
    li.appendChild(delete_button);
    todo_list.appendChild(li);
};
add_todo_button.addEventListener("click", () => {
    let todo_text = todo_input.value.trim();
    if (todo_text) {
        add_todo_to_dom(todo_text);
        save_todos();
        todo_input.value = "";
    }
});
load_todos();
