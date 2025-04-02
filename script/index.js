let task_counter = 3;

document.getElementById('adder').addEventListener('click', ()=>{
    const newTask = document.createElement('dialog');
    newTask.className = 'task';
    newTask.innerHTML = `<h3>Задача ${task_counter++}<h3>`

    parent = document.getElementById('tasks_place')
    parent.appendChild(newTask);
})

