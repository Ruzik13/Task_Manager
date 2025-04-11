document.addEventListener('DOMContentLoaded', function() {

    const status = {
        deleted : "Удалено",
        in_prog : "В процессе",
        done : "Готово",

    };

    const addModal = document.getElementById('taskModal');
    const openModalBtn = document.getElementById('adder');
    const closeModalBtns = document.querySelectorAll('.close-modal');
    const taskForm = document.getElementById('taskForm');
    const tasksContainer = document.getElementById('tasks_container')

    openModalBtn.addEventListener('click', ()=>{
        addModal.style.display = 'block';
    });

    closeModalBtns.forEach(btn=>{
        btn.addEventListener('click', ()=>{
            addModal.style.display = 'none';
            taskForm.reset();
        });
    });

    window.addEventListener('click', (e)=>{
        if (e.target === addModal){
            addModal.style.display = 'none';
            taskForm.reset();
        };
    })

    taskForm.addEventListener('submit', (e)=>{
        e.preventDefault();

        const taskName = document.getElementById('taskName').value;
        const taskDesc = document.getElementById('taskDesc').value;

        if (!taskName.trim()) {
            alert('Введите название задачи');
            return;
        }

        createTask(taskName, taskDesc);
        addModal.style.display = 'none'
        taskForm.reset();
    })

    function createTask(name, description, taskId = null){
        if (!taskId){
            taskId = 'task_' + Date.now();
        }

        const taskElement = document.createElement('div');
        taskElement.className = 'task';
        taskElement.id = taskId;
        taskElement.innerHTML = `
            <h3 class="task__tittle">${name}</h3>
            ${description ? `<p class="task__description">${description}</p>` : ''}
            <p class="task__status"><strong>Статус:</strong> ${status.in_prog}</p>
            <div class="task__button-area">
                <button class='task__button done'>✓</button>
                <button class='task__button edit' data-task-id="${taskId}">
                    <img src="img/icons8-edit.svg" alt="edit" class="edit_btn">
                </button>
                <button class="task__button delete" data-task-id="${taskId}">×</button>
            </div>
        `;

        if (!document.getElementById(taskId)){
            tasksContainer.appendChild(taskElement)
        }
    }
})