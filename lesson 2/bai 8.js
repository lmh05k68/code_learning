const employees = [
    { id: 1, name: "John", workingDays: 22, lateDays: 2 },
    { id: 2, name: "Jane", workingDays: 20, lateDays: 0 },
    { id: 3, name: "Mark", workingDays: 25, lateDays: 1 },
];
//cong = workingDays - lateDays
let MAX = employees[0].workingDays - employees[0].lateDays;
let indexMAX = 0;
for(let i = 0; i < employees.length; i++){
    const element = employees[i];
    const work = element.workingDays - element.lateDays;
    if(work > MAX){
        MAX = work;
        indexMAX = i;
    }
}
console.log(employees[indexMAX])
