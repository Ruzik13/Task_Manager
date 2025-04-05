document.addEventListener('DOMContentLoaded', function() {
    // Элементы модального окна
    const modal = document.getElementById('taskModal');
    const openModalBtn = document.getElementById('adder');
    const closeModalBtn = document.querySelector('.close-modal');
    const taskForm = document.getElementById('taskForm');
    const tasksContainer = document.getElementById('tasks_place');

    // Открытие модального окна
    openModalBtn.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    // Закрытие модального окна
    closeModalBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Закрытие при клике вне окна
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Обработка формы
    taskForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const taskName = document.getElementById('taskName').value;
        const taskDesc = document.getElementById('taskDesc').value;
        
        if (!taskName.trim()) {
            alert('Введите название задачи');
            return;
        }
        
        createTask(taskName, taskDesc);
        
        taskForm.reset();
        modal.style.display = 'none';
    });

    function createTask(name, description) {
        const taskId = 'task_' + Date.now();
        const taskHTML = `
            <div class="task" id="${taskId}">
                <h3 class="task__tittle">${name}</h3>
                ${description ? `<p class="task__description">${description}</p>` : ''}
                <div class="task__button-area">
                    <button class='task__button done'>✓</button>
                    <button class='task__button edit'><img src="img/icons8-edit.svg" alt="edit" id="edit_btn"></button>
                    <button class="task__button delete" onclick="deleteTask('${taskId}')">×</button>
                </div>
            </div>
        `;
        
        tasksContainer.insertAdjacentHTML('beforeend', taskHTML);
    }

    window.deleteTask = function(taskId) {
        const task = document.getElementById(taskId);
        if (task) {
            task.remove();
        }
    };
});