let todos = JSON.parse(localStorage.getItem('todos')) || [];

function renderTodos() {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';
    
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.className = 'todo-item';
        li.innerHTML = `
            <span>${todo}</span>
            <button class="delete-btn" onclick="deleteTodo(${index})">Delete</button>
        `;
        todoList.appendChild(li);
    });
}

function addTodo() {
    const input = document.getElementById('todoInput');
    if (input.value.trim()) {
        todos.push(input.value.trim());
        localStorage.setItem('todos', JSON.stringify(todos));
        input.value = '';
        renderTodos();
    }
}

function deleteTodo(index) {
    todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodos();
}

document.getElementById('todoInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') addTodo();
});

renderTodos();