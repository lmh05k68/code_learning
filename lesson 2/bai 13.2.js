let tasks = [ 
    { name: "Hoàn thành bài tập JavaScript", description: "Làm xong bài tập về Array và Object", completed: false },
    { name: "Đọc sách", description: "Đọc xong chương 3", completed: true },
    { name: "Đi mua hàng", description: "Mua thêm thức ăn cho tuần", completed: false }
];
const markTasksCompleted = (task) => {
    tasks.forEach(task => {
        if (taskNames.includes(task.name)) {
            task.completed = true;
        }
    });
}
markTasksCompleted(["Hoàn thành bài tập JavaScript", "Đọc sách"]);
console.log(tasks);