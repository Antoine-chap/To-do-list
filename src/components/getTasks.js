export const getTasks = () => {
    const tasks = JSON.parse(localStorage.getItem('localTodoList')) || [];
tasks.forEach(task => {
    const li = document.createElement('li');
    li.textContent = task.name;
    document.getElementById('todoList').appendChild(li);
});
}