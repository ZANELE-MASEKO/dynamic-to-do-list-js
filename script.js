const { createElement } = require("react");

document.addEventListener('DOMContentLoaded',function() {

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Step 3: Function to Save Tasks to Local Storage
    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Step 4: Function to Render (Load) Tasks on Page
    function loadTasks() {
        taskList.innerHTML = ""; // Clear existing tasks before rendering
        tasks.forEach(function(taskText) {
            const li = document.createElement('li');
            li.textContent = taskText;

            // Create Remove button
            const removeButton = document.createElement('button');
            removeButton.textContent = "Remove";
            removeButton.classList.add('remove-btn');

            // Remove task when button is clicked
            removeButton.onclick = function() {
                // Remove task from array
                tasks = tasks.filter(task => task !== taskText);
                saveTasks(); // Update Local Storage
                loadTasks(); // Re-render the list
            };

            li.appendChild(removeButton);
            taskList.appendChild(li);
        });
    }

    const addButton= document.getElementById('add-task-btn');

    const taskInput= document.getElementById('task-input');

    const taskList= document.getElementById('task-list');

    function addTask() {
        const taskText= taskInput.value.trim();

        if (taskText === "") {
            alert('Enter a task');
            return;
        }

        const li=document.createElement('li');
        li.textContent=taskText;

        const removeButton= createElement('button');
        removeButton.textContent='Remove';
        removeButton.classList.add('remove-btn');

        removeButton.onlick= function() {
            taskList.removeChild(li);
        };

        li.appendChild(removeButton);
        taskList.appendChild(li);

        taskInput.value='';
    }


    
    addButton.addEventListener('click',addTask);

    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

});