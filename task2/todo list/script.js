document.getElementById('addTaskButton').addEventListener('click', addTask);
document.getElementById('prioritySelect').addEventListener('change', function() {
    this.classList.add('white-bg');
});

function addTask() {
    const taskNameInput = document.getElementById('taskNameInput');
    const taskDescriptionInput = document.getElementById('taskDescriptionInput');
    const prioritySelect = document.getElementById('prioritySelect');
    const categoryInput = document.getElementById('categoryInput');
    const taskList = document.getElementById('taskList');

    if (taskNameInput.value === '' || taskDescriptionInput.value === '') return;

    const li = document.createElement('li');
    const taskDetails = document.createElement('div');
    taskDetails.className = 'task-details';

    const taskName = document.createElement('span');
    taskName.className = 'task-name';
    taskName.textContent = `Name: ${taskNameInput.value}`;

    const taskDescription = document.createElement('span');
    taskDescription.className = 'task-description';
    taskDescription.textContent = `Description: ${taskDescriptionInput.value}`;

    const taskCategory = document.createElement('span');
    taskCategory.textContent = `Category: ${categoryInput.value}`;

    const taskPriority = document.createElement('span');
    taskPriority.textContent = `Priority: ${prioritySelect.value}`;

    taskDetails.appendChild(taskName);
    taskDetails.appendChild(taskDescription);
    taskDetails.appendChild(taskCategory);
    taskDetails.appendChild(taskPriority);

    li.appendChild(taskDetails);

    const taskButtons = document.createElement('div');
    taskButtons.className = 'task-buttons';

    const completeBtn = document.createElement('button');
    completeBtn.className = 'complete-btn';
    completeBtn.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(li);
    });

    taskButtons.appendChild(completeBtn);
    taskButtons.appendChild(deleteBtn);
    li.appendChild(taskButtons);

    taskList.appendChild(li);

    taskNameInput.value = '';
    taskDescriptionInput.value = '';
    categoryInput.value = '';
    prioritySelect.value = 'low';
}
