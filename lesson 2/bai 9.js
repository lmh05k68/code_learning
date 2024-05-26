const employees = [
    { id: 1, name: "John", salary: 2000 },
    { id: 2, name: "Jane", salary: 2500 },
    { id: 3, name: "Mark", salary: 3000 },
    { id: 4, name: "John", salary: 2200 },
];
const result = {};
const listName = employees.map(item => item.name);
console.log(listName);
listName.forEach((item,idx)=>{
    if(!result[item]){
        result[item] = [];
    }
    result[item].push(employees[idx]);
});
console.log(result)