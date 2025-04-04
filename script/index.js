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
        
        // Создаем новую задачу
        createTask(taskName, taskDesc);
        
        // Очищаем форму и закрываем модальное окно
        taskForm.reset();
        modal.style.display = 'none';
    });

    // Функция создания задачи
    function createTask(name, description) {
        const taskId = 'task_' + Date.now();
        const taskHTML = `
            <div class="task" id="${taskId}">
                <h3 class="task__tittle">${name}</h3>
                ${description ? `<p class="task__description">${description}</p>` : ''}
                <button class='task__button done'>✓</button>
                <button class="task__button" onclick="deleteTask('${taskId}')">×</button>
            </div>
        `;
        
        tasksContainer.insertAdjacentHTML('beforeend', taskHTML);
    }

    // Функция удаления задачи (добавьте в глобальную область видимости)
    window.deleteTask = function(taskId) {
        const task = document.getElementById(taskId);
        if (task) {
            task.remove();
        }
    };
});