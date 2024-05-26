let tasks = [ 
    { name: "Hoàn thành bài tập JavaScript", description: "Làm xong bài tập về Array và Object", completed: false },
    { name: "Đọc sách", description: "Đọc xong chương 3", completed: true },
    { name: "Đi mua hàng", description: "Mua thêm thức ăn cho tuần", completed: false }
];
const sortTasksAsc = (tasks) => {
    return tasks.sort((a, b) => a.name.localeCompare(b.name));
}

const sortTasksDesc = (tasks) => {
    return tasks.sort((a, b) => b.name.localeCompare(a.name));
}

// Sắp xếp theo thứ tự A -> Z
let sortedAsc = sortTasksAsc([...tasks]);
console.log("Sắp xếp A -> Z:", sortedAsc);

// Sắp xếp theo thứ tự Z -> A
let sortedDesc = sortTasksDesc([...tasks]);
console.log("Sắp xếp Z -> A:", sortedDesc);
