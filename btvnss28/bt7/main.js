let students = [
    { name: "trần trí dương", scores: { math: 9, english: 8, literature: 7 } },
    { name: "hà bích ngọc", scores: { math: 3, english: 2, literature: 5 } },
    { name: "bùi thái sơn", scores: { math: 9.5, english: 9, literature: 9 } }
];
function filterStudents() {
    return students.filter(student => {
        const average = (student.scores.math + student.scores.english + student.scores.literature) / 3;
    return average >= 8;
    });
}
let filteredStudents = filterStudents();
console.log(filteredStudents);
