
export const addTodo = () => {
    const input = document.getElementById('inputTodo');
    const inputText = input.value.trim();
    
    if (inputText !== '') {
        const li = document.createElement('li');
        li.textContent = inputText;
        document.getElementById('todoList').appendChild(li);
        input.value = '';
        
        const tasks = JSON.parse(localStorage.getItem('localTodoList')) || [];
        const newTask = {
            id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
            name: inputText,
            status: 'todo',
        };
        
        tasks.push(newTask);
        localStorage.setItem('localTodoList', JSON.stringify(tasks));
    }
};
