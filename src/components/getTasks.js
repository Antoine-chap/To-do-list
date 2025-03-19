import {deleteTodo} from "./deleteTodo.js";

export const getTasks = () => {
    const tasks = JSON.parse(localStorage.getItem('localTodoList')) || [];
    const todoList = document.getElementById('todoList');
    
    todoList.innerHTML = '';
    
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.className = 'todo-item';
        
        const taskText = document.createElement('span');
        taskText.textContent = task.name;
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Supprimer';
        deleteBtn.className = 'delete-btn';
        
        deleteBtn.addEventListener('click', () => {
            deleteTodo(task.id);
        });
        
        li.appendChild(taskText);
        li.appendChild(deleteBtn);
        
        todoList.appendChild(li);
    });
};