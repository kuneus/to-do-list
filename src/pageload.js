import {
  createAndAppend,
  ProjectFactory,
  projectsArr,
  taskFactory,
  tasksArr,
  appendTask,
} from './index';
// taskFactory(project, title)
// return {project,title,taskInfo,setDueDate,setPriority,};

const pageload = () => {
  const mainBody = document.getElementById('main-body');

  // header for Today
  const mainHeader = createAndAppend(
    'div',
    null,
    'task-header',
    null,
    mainBody,
  );

  // display title of page
  const pageTitle = createAndAppend(
    'div',
    null,
    'page-title',
    'Today',
    mainHeader,
  );

  // container for new task buttons
  const newTaskCont = createAndAppend(
    'div',
    null,
    'new-task-cont',
    null,
    mainHeader,
  );

  // button to open new task form
  const addTask = createAndAppend(
    'button',
    null,
    'add-task-btn',
    'Add to-do',
    newTaskCont,
  );

  // container for new task form
  const taskForm = createAndAppend('div', null, 'task-form', null, newTaskCont);

  // text input for inputting title of task
  const textInput = createAndAppend(
    'input',
    null,
    'project-input',
    null,
    taskForm,
  );
  textInput.setAttribute('placeholder', 'What will you do?');

  // select due date
  const dateInput = createAndAppend('input', null, null, null, taskForm);
  dateInput.setAttribute('type', 'date');

  // select options for projects
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
    'create-task-btn',
    'Add',
    taskForm,
  );

  // button to cancel adding new task
  const cancelBtn = createAndAppend(
    'button',
    'task-form-btns',
    'cancel-task-btn',
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

  const taskFormBtns = document.getElementsByClassName('task-form-btns');

  // event listener to submit new to-do
  createTaskBtn.addEventListener('click', () => {
    // **** need logic to set dueDate to today's date ****

    if (textInput.value !== '') {
      // make new task
      const newTask = taskFactory(selectInput.value, textInput.value);
      newTask.setDueDate(dateInput.value);
      tasksArr.push(newTask);
      appendTask(newTask, true);
    } else {
      console.log('empty text input!');
    }
  });

  // hide task form and return to default
  Array.from(taskFormBtns).forEach((button) => {
    button.addEventListener('click', () => {
      taskForm.style.display = 'none';
      addTask.style.display = 'block';
      textInput.value = '';
    });
  });

  // container for list of tasks
  createAndAppend('div', null, 'task-list', null, mainBody);

  // load page with example tasks
  (function exampleTasks() {
    const task1 = taskFactory(
      'The Odin Project',
      'Create modules for Home sidebar buttons',
    );
    tasksArr.push(task1);

    const task2 = taskFactory('The Odin Project', 'Create editTask function');
    tasksArr.push(task2);

    const task3 = taskFactory('The Odin Project', 'Create deleteTask function');
    tasksArr.push(task3);

    const task4 = taskFactory('The Odin Project', 'Add checkbox to tasks');
    tasksArr.push(task4);
  })();

  // Load task list with current tasks
  for (let i = 0; i < tasksArr.length; i += 1) {
    appendTask(tasksArr[i], true);
  }
};

export { pageload };
