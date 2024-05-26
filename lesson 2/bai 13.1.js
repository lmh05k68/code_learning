let tasks = [ 
    { name: "Hoàn thành bài tập JavaScript", description: "Làm xong bài tập về Array và Object", completed: false },
    { name: "Đọc sách", description: "Đọc xong chương 3", completed: true },
    { name: "Đi mua hàng", description: "Mua thêm thức ăn cho tuần", completed: false }
];
let addTask = (name,description,completed) => {
    const newTask = {
        name: name,
        description: description,
        completed: completed
    };
    tasks.push(newTask);
}
addTask("Luyện tập thể dục", "Chạy bộ 5 km", false);
console.log(tasks);