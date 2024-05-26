const employees = [
    { id: 1, name: "John", workingDays: 22, lateDays: 2, salary: 2000 },
    { id: 2, name: "Jane", workingDays: 25, lateDays: 0, salary: 2500 },
    { id: 3, name: "Mark", workingDays: 20, lateDays: 1, salary: 3000 },
];
let MAX = employees[0].workingDays / employees[0].salary;
let indexMAX = 0;
for(let i = 0; i < employees.length; i++){
    const element = employees[i];
    const work = element.workingDays / element.salary;
    if(work > MAX){
        MAX = work;
        indexMAX = i;
    }
}
console.log(employees[indexMAX])
