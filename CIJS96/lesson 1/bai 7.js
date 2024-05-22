const employees = [
    { id: 1, name: "John", salary: 2000 },
    { id: 2, name: "Jane", salary: 2500 },
    { id: 3, name: "Mark", salary: 3000 },
];

let highestPaidEmployee = employees[0];

for (let i = 1; i < employees.length; i++) {
    if (employees[i].salary > highestPaidEmployee.salary) {
        highestPaidEmployee = employees[i];
    }
}

console.log(highestPaidEmployee);