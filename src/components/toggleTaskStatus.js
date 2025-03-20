// import { getTasks } from "./getTasks";



export const toggleTaskStatus = (taskId) => {
    const tasks = JSON.parse(localStorage.getItem('localTodoList')) || [];
    
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    
    if (taskIndex !== -1) {
        tasks[taskIndex].completed = !tasks[taskIndex].completed;
        
        localStorage.setItem('localTodoList', JSON.stringify(tasks));
        console.log('Updated tasks:', tasks);
        return tasks[taskIndex].completed;
    
    }
};