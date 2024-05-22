const employee = [
    {id: 1, name:"John", workingDays: 22},
    {id: 2, name:"Jane", workingDays: 20},
    {id: 3, name:"Mark", workingDays: 25},
];
let count = (employee) =>{
    let result = [];
    for(let i = 0; i < employee.length; i++){
        result += employee[i].workingDays;
    }
    return result;
}
console.log(count(employee));