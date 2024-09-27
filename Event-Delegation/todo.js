//1. Build a simple to-do list application. Use event delegation to manage addition and removal of items in the list.
//2. Implement a feature to mark items as completed and filter between all, active, and completed Items. 

// To-Do List Application

document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const addButton = document.getElementById('add-button');
    const todoList = document.getElementById('todo-list');
    const filterButtons = document.querySelectorAll('.filter-button');

    let todos = [];

    // Function to render the to-do list
    function renderTodos(filter = 'all') {
        todoList.innerHTML = '';
        const filteredTodos = filter === 'active' 
            ? todos.filter(todo => !todo.completed) 
            : filter === 'completed' 
            ? todos.filter(todo => todo.completed) 
            : todos;

        filteredTodos.forEach(todo => {
            const li = document.createElement('li');
            li.textContent = todo.text;
            li.classList.toggle('completed', todo.completed);
            li.dataset.index = todos.indexOf(todo);

            // Create a remove button
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.classList.add('remove-button');
            li.appendChild(removeButton);
            
            todoList.appendChild(li);
        });
    }

    // Event delegation for removing items
    todoList.addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-button')) {
            const index = event.target.parentElement.dataset.index;
            todos.splice(index, 1);
            renderTodos();
        } else if (event.target.tagName === 'LI') {
            const index = event.target.dataset.index;
            todos[index].completed = !todos[index].completed;
            renderTodos();
        }
    });

    // Add new to-do item
    addButton.addEventListener('click', () => {
        const todoText = todoInput.value.trim();
        if (todoText) {
            todos.push({ text: todoText, completed: false });
            todoInput.value = '';
            renderTodos();
        }
    });

    // Filter to-do items
    filterButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
            renderTodos(event.target.dataset.filter);
        });
    });
});
