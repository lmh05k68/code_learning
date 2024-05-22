const arr = [1,2,3,4,5];
           //0,1,2,3,4
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

const newArr = cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
cars.map((item) => {
    console.log(item)
})

const person = {
    name: 'Doraemon',
    age: 10
}
for (const key in person){
    console.log(key, person[key])
}
for (const iterator of cars){
    console.log(iterator)
}




const listPerson = [
    {
        name:'Doraemon',
        age:10,
    },
    {
        name:'Nobita',
        age:5
    }
]
for(let i = 0;i < listPerson.length; i++){
    const element = listPerson[i];
    console.log(element.name)   
}