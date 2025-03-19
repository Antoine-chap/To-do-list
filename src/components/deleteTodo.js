import {getTasks} from "./getTasks.js";

export const deleteTodo = (taskId) => {
    let tasks = JSON.parse(localStorage.getItem('localTodoList')) || [];
    
    tasks = tasks.filter(task => task.id !== taskId);
    
    localStorage.setItem('localTodoList', JSON.stringify(tasks));
    
    getTasks();
};