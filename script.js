const { createElement } = require("react");

document.addEventListener('DOMContentLoaded',function() {

    const addbutton= document.getElementById('add-task-btn');

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
        removeButton.className='remove-button'

        removeButton.onlick= function() {
            taskList.removeChild(li);
        };

        li.appendChild(removeButton);
        taskList.appendChild(li);

        taskInput.value='';
    }


    
    addbutton.addEventListener('click',addTask);

    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

});