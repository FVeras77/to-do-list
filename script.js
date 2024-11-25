const inputNewTask = document.getElementById('input-new-task');
const btnNewTask = document.getElementById('btn-new-task');
const toDoList =document.getElementById('to-do-list');


function addNewTask() {
  const taskText = inputNewTask.value;
  if (taskText !== '') {
    const newTask = document.createElement('li');
    newTask.textContent = taskText;
    const btnOk = document.createElement('button');
    btnOk.textContent = 'Ok';
    newTask.appendChild(btnOk);
    toDoList.appendChild(newTask);
    inputNewTask.value = '';
  }
}

function markTaskAsDoneRemove(event) {
  if (event.target.tagName === 'BUTTON') {
    const task = event.target.parentNode;
    task.style.textDecoration = 'line-through';
    setTimeout(() => {
      task.remove();
    }, 2000);
  }
}

btnNewTask.addEventListener('click', addNewTask);
toDoList.addEventListener('click', markTaskAsDoneRemove);