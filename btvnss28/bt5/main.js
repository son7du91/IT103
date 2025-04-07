let company = {
    name: "rikkeisoft",
    location: "hà nội",
    employees: [
        { name: "nguyễn văn luận", position: "developer" },
        { name: "nguyễn văn hoàng", position: "tester" },
        { name: "hoàng nam cao", position: "manager" }
    ]
};
console.log(`${company.name}`);
console.log(`${company.location}`);
company.employees.forEach((key) => {
    console.log(key.name,"," +key.position);
} );

