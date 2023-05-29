import { createAndAppend, projectsArr, taskFactory, tasksArr } from './index';
// taskFactory(project, title, dueDate, priority, description) {
// return { project, title, dueDate, priority, description };

const pageload = () => {
  const mainBody = document.getElementById('main-body');

  // header for Today
  const mainHeader = createAndAppend('div', null, null, 'Today', mainBody);

  // container for new task buttons
  const newTaskCont = createAndAppend('div', null, null, null, mainHeader);

  // button to open new task form
  const addTask = createAndAppend(
    'button',
    null,
    'add-task-btn',
    'Add to-do',
    newTaskCont,
  );
  // container for new task form
  const taskForm = createAndAppend('div', null, null, null, newTaskCont);
  const textInput = createAndAppend(
    'input',
    null,
    'project-input',
    null,
    taskForm,
  );
  textInput.setAttribute('placeholder', 'What will you do?');
  const selectInput = createAndAppend(
    'select',
    null,
    'project-select',
    null,
    taskForm,
  );

  // button to submit new task
  const createTaskBtn = createAndAppend(
    'button',
    'task-form-btns',
    null,
    'Add',
    taskForm,
  );
  // button to cancel adding new task
  const cancelBtn = createAndAppend(
    'button',
    'task-form-btns',
    null,
    'Cancel',
    taskForm,
  );
  // default to hidden task form
  taskForm.style.display = 'none';

  // display task form container
  addTask.addEventListener('click', () => {
    taskForm.style.display = 'block';
    addTask.style.display = 'none';

    // clear project select options
    selectInput.innerHTML = '';

    // update select options with current projects
    for (let i = 0; i < projectsArr.length; i += 1) {
      const option = createAndAppend(
        'option',
        null,
        null,
        projectsArr[i].title,
        selectInput,
      );
      option.value = projectsArr[i].title;
    }
  });

  // add new to-do
  createTaskBtn.addEventListener('click', () => {
    const projectSelect = document.getElementById('project-select').value;
    const projectInput = document.getElementById('project-input').value;
    // logic to add new to-do
    // use taskFactory to create new to-do
    // set dueDate to today's date
    // need select option for current projects
    const newTask = taskFactory(projectSelect, projectInput);
    tasksArr.push(newTask);
    appendTask(newTask);
  });

  const taskFormBtns = document.getElementsByClassName('task-form-btns');
  // hide task form and return to default
  Array.from(taskFormBtns).forEach((button) => {
    button.addEventListener('click', () => {
      taskForm.style.display = 'none';
      addTask.style.display = 'block';
    });
  });

  // container for list of tasks
  const taskList = createAndAppend('div', null, null, null, mainBody);
  // append new task
  const appendTask = (task) => {
    const taskLine = createAndAppend('div', 'task-line', null, null, taskList);
    createAndAppend('div', null, null, task.title, taskLine);
    createAndAppend('div', null, null, task.project, taskLine);
  };
};

export { pageload };
