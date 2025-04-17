const courses = [
    {
        id: 1,
        content: 'learn javascript session 01',
        duedate: '2023-04-17',
        status: 'pending',
        assignedto: 'anh bách',
    },
    {
        id: 2,
        content: 'learn javascript session 2',
        duedate: '2023-04-17',
        status: 'pending',
        assignedto: 'lâm th`',
    },
    {
        id: 3,
        content: 'learn css session 1',
        duedate: '2023-04-17',
        status: 'pending',
        assignedto: 'hiếu cí ớt ớt',
    },
];
function displaycourses(filteredcourses = courses) {
    const tablebody = document.getElementById('course-list');
    tablebody.innerHTML = '';

    filteredcourses.forEach((course, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${course.content}</td>
            <td>${course.duedate}</td>
            <td>${course.status}</td>
            <td>${course.assignedto}</td>
            <td>
                <button onclick="deletecourse(${course.id})">delete</button>
                <button onclick="editcourse(${course.id})">edit</button>
            </td>
        `;
        tablebody.appendChild(row);
    });
}
function searchcourses() {
    const contentsearch = document.getElementById('content').value.toLowerCase();
    const datesearch = document.getElementById('search-date').value;
    const statussearch = document.getElementById('choose-status').value;

    const filteredcourses = courses.filter(course =>
        (course.content.toLowerCase().includes(contentsearch) || contentsearch === '') &&
        (course.duedate === datesearch || datesearch === '') &&
        (course.status === statussearch || statussearch === '')
    );

    displaycourses(filteredcourses);
}

function deletecourse(id) {
    const index = courses.findIndex(course => course.id === id);
    if (index !== -1) {
        courses.splice(index, 1);
        displaycourses();
    }
}
function addcourse() {
    const content = document.getElementById('content').value;
    const duedate = document.getElementById('search-date').value;
    const status = document.getElementById('choose-status').value;
    const assignedto = document.getElementById('username').value;
    if (content && duedate && status && assignedto) {
        const newcourse = {
            id: courses.length + 1,
            content,
            duedate,
            status,
            assignedto,
        };

        courses.push(newcourse);
        displaycourses();
    } else {
        alert('please fill all fields');
    }
}
function editcourse(id) {
    const course = courses.find(course => course.id === id);
    if (course) {
        document.getElementById('content').value = course.content;
        document.getElementById('search-date').value = course.duedate;
        document.getElementById('choose-status').value = course.status;
        document.getElementById('username').value = course.assignedto;
    }
}
window.onload = displaycourses;
