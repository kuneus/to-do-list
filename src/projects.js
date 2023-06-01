import {
  createAndAppend,
  projectsArr,
  appendTask,
  taskFactory,
  loadTasks,
  tasksArr,
} from './index';
// createAndAppend(elementType, eleClass, eleID, eleText, eleParent)

const projectPages = (project) => {
  const mainBody = document.getElementById('main-body');
  const mainHeader = document.getElementById('task-header');
  const pageTitle = document.getElementById('page-title');
  const addTaskBtn = document.getElementById('add-task-btn');
  const taskForm = document.getElementById('task-form');
  const taskList = document.getElementById('task-list');

  // set title of page to Project's title
  pageTitle.textContent = project.title;
  loadTasks(project);

  taskForm.innerHTML = '';

  const projInput = createAndAppend(
    'input',
    null,
    'project-input2',
    null,
    taskForm,
  );
  projInput.setAttribute('placeholder', 'What will you do?');

  // button to submit new task
  const createTaskBtn = createAndAppend(
    'button',
    'task-form-btns',
    'create-task-btn2',
    'Add',
    taskForm,
  );

  // button to cancel adding new task
  const cancelBtn = createAndAppend(
    'button',
    'task-form-btns',
    'cancel-task-btn2',
    'Cancel',
    taskForm,
  );

  // event listener to submit new to-do
  createTaskBtn.addEventListener('click', () => {
    if (projInput.value !== '') {
      const newTask = taskFactory(project.title, projInput.value);
      tasksArr.push(newTask);
      appendTask(newTask, false);
    } else {
      console.log('empty task title!');
    }
  });

  // hide task form and return to default
  const taskFormBtns = document.getElementsByClassName('task-form-btns');
  Array.from(taskFormBtns).forEach((button) => {
    button.addEventListener('click', () => {
      taskForm.style.display = 'none';
      addTaskBtn.style.display = 'block';
      projInput.value = '';
    });
  });

  // loop to create DOM elements for each task
};

export { projectPages };
