let employees = [
    { id: 1, name: 'john', age: 18, address: 'district' },
    { id: 2, name: 'mike', age: 20, address: 'city center' },
    { id: 3, name: 'linda', age: 22, address: 'suburb' },
    { id: 4, name: 'peter', age: 25, address: 'village' },
    { id: 5, name: 'tony', age: 30, address: 'downtown' },
  ];
  function renderEmployeeTable(employees) {
    const tableBody = document.getElementById("employeetable");
    if (!tableBody) return; 
    tableBody.innerHTML = "";
    employees.forEach((employee, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${employee.name}</td>
        <td>${employee.age}</td>
        <td>${employee.address}</td>
      `;
      tableBody.appendChild(row);
    });
  }
  renderEmployeeTable(employees);