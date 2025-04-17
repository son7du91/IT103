const employees = [
    { name: 'nguyễn văn a', position: 'developer' },
    { name: 'trần thị b', position: 'designer' },
    { name: 'phạm văn c', position: 'project manager' },
    { name: 'lê văn d', position: 'tester' },
    { name: 'hoàng thị e', position: 'hr' },
    { name: 'vũ văn f', position: 'ba' },
    { name: 'đỗ thị g', position: 'scrum master' },
    { name: 'ngô văn h', position: 'devops' }
];
const rowsperpage = 3;
let currentpage = 1;
function displayemployees() {
    const tablebody = document.getElementById('employeetablebody');
    tablebody.innerHTML = '';
    const start = (currentpage - 1) * rowsperpage;
    const end = start + rowsperpage;
    const paginateditems = employees.slice(start, end);
    paginateditems.forEach((emp, index) => {
        const row = `<tr>
            <td>${start + index + 1}</td>
            <td>${emp.name}</td>
            <td>${emp.position}</td>
        </tr>`;
        tablebody.innerHTML += row;
    });
    updatepagination();
}
function updatepagination() {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';
    const totalpages = Math.ceil(employees.length / rowsperpage);
    const prevbtn = `<button ${currentpage === 1 ? 'disabled' : ''} onclick="gotopage(${currentpage - 1})">previous</button>`;
    pagination.innerHTML += prevbtn;
    for (let i = 1; i <= totalpages; i++) {
        pagination.innerHTML += `<button class="${currentpage === i ? 'active' : ''}" onclick="gotopage(${i})">${i}</button>`;
    }
    const nextbtn = `<button ${currentpage === totalpages ? 'disabled' : ''} onclick="gotopage(${currentpage + 1})">next</button>`;
    pagination.innerHTML += nextbtn;
}
function gotopage(page) {
    currentpage = page;
    displayemployees();
}
function addemployee() {
    const name = document.getElementById('nameinput').value.trim();
    const position = document.getElementById('positioninput').value.trim();
    if (name && position) {
        employees.push({ name, position });
        document.getElementById('nameinput').value = '';
        document.getElementById('positioninput').value = '';
        gotopage(Math.ceil(employees.length / rowsperpage)); 
    } else {
        alert('vui lòng nhập đầy đủ thông tin.');
    }
}
displayemployees();
