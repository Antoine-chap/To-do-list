import {deleteTodo} from "./deleteTodo.js";
import {toggleTaskStatus} from "./toggleTaskStatus.js";

export const getTasks = () => {
    const tasks = JSON.parse(localStorage.getItem('localTodoList')) || [];
    const todoList = document.getElementById('todoList');
    
    todoList.innerHTML = '';
    
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.className = 'todo-item';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.addEventListener('change', () => {toggleTaskStatus(task.id)});
        checkbox.className = 'checkbox';
        
        const taskText = document.createElement('span');
        taskText.textContent = task.name;
        taskText.className = "taskText";

        if (task.completed) {
            taskText.style.textDecoration = 'line-through';
            taskText.style.color = '#888';
        }
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Supprimer';
        deleteBtn.className = 'delete-btn';
        
        deleteBtn.addEventListener('click', () => {
            deleteTodo(task.id);
        });

        li.appendChild(checkbox);
        li.appendChild(taskText);
        li.appendChild(deleteBtn);
        
        todoList.appendChild(li);
    });
};