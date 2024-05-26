const employees = [
    { id: 1, name: "John", workingDays: 20 },
    { id: 2, name: "Jane", workingDays: 22 },
    { id: 3, name: "Mark", workingDays: 20 },
    { id: 4, name: "Sam", workingDays: 24 },
    { id: 5, name: "Lucy", workingDays: 22 },
];
const result = {};
employees.forEach((item)=>{
    if(!result[item.workingDays]){
        result[item.workingDays] = 0;
    }
    result[item.workingDays]++;
});
console.log(result)