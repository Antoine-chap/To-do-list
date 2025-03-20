import {deleteTodo} from "./deleteTodo.js";
import { getTasks } from "./getTasks.js";
import {toggleTaskStatus} from "./toggleTaskStatus.js";


export const addTodo = () => {
    const input = document.getElementById('inputTodo');
    const inputText = input.value.trim();
    
    if (inputText !== '') {
        const tasks = JSON.parse(localStorage.getItem('localTodoList')) || [];
        const newTask = {
            id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
            name: inputText,
            status: 'todo',
            completed : false,
        };
        
        // const li = document.createElement('li');
        // li.className = 'todo-item';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'checkbox';
        
        const taskText = document.createElement('span');
        taskText.textContent = newTask.name;
        taskText.className = "taskText";
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Supprimer';
        deleteBtn.className = 'delete-btn';
        
        deleteBtn.addEventListener('click', () => {
            deleteTodo(newTask.id);
        });

        // li.appendChild(checkbox);
        // li.appendChild(taskText);
        // li.appendChild(deleteBtn);
        // document.getElementById('todoList').appendChild(li);
        
        input.value = '';
        
        tasks.push(newTask);

        localStorage.setItem('localTodoList', JSON.stringify(tasks));
        getTasks();
    }
};