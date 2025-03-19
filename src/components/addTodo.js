import {deleteTodo} from "./deleteTodo.js";



export const addTodo = () => {
    const input = document.getElementById('inputTodo');
    const inputText = input.value.trim();
    
    if (inputText !== '') {
        const tasks = JSON.parse(localStorage.getItem('localTodoList')) || [];
        const newTask = {
            id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
            name: inputText,
            status: 'todo',
        };
        
        const li = document.createElement('li');
        li.className = 'todo-item';
        
        const taskText = document.createElement('span');
        taskText.textContent = newTask.name;
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Supprimer';
        deleteBtn.className = 'delete-btn';
        
        deleteBtn.addEventListener('click', () => {
            deleteTodo(newTask.id);
        });
        
        li.appendChild(taskText);
        li.appendChild(deleteBtn);
        document.getElementById('todoList').appendChild(li);
        
        input.value = '';
        
        tasks.push(newTask);
        localStorage.setItem('localTodoList', JSON.stringify(tasks));
    }
};