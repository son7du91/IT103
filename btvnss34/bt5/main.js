document.addEventListener("DOMContentLoaded", load_employees);
function add_employee() {
    let name = document.getElementById("name").value;
    let position = document.getElementById("position").value;
    if (!name || !position) {
        alert("vui lòng nhập đầy đủ thông tin nhân viên!");
        return;
    }
    let employees = JSON.parse(localStorage.getItem("employees")) || [];
    employees.push({ name, position });
    localStorage.setItem("employees", JSON.stringify(employees));

    load_employees();
}
function load_employees() {
    let employees = JSON.parse(localStorage.getItem("employees")) || [];
    let employee_list = document.getElementById("employee-list");
    employee_list.innerHTML = "";
    employees.forEach((employee, index) => {
        let row = `<tr>
            <td>${index + 1}</td>
            <td>${employee.name}</td>
            <td>${employee.position}</td>
        </tr>`;
        employee_list.innerHTML += row;
    });
}
