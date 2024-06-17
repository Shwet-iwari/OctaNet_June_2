
document.addEventListener('DOMContentLoaded', () => {
    const addTaskButton = document.getElementById('add-task-button');
    const newTaskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', addTask);

    function addTask() {
        const taskText = newTaskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');

            const span = document.createElement('span');
            span.textContent = taskText;
            span.addEventListener('click', () => {
                li.classList.toggle('completed');
            });

            const deleteButton = document.createElement('button');
            deleteButton.textContent = '✖';
            deleteButton.addEventListener('click', () => {
                li.remove();
            });

            li.appendChild(span);
            li.appendChild(deleteButton);
            taskList.appendChild(li);

            newTaskInput.value = '';
        }
    }
});
