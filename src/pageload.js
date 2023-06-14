import { format } from 'date-fns';
import { createAndAppend, taskFactory, tasksArr } from './toExport';
import { appendTask } from './createTask';

// create header page consisting of page title and form for adding tasks
const createHeader = () => {
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
  createAndAppend('div', null, 'page-title', 'All Tasks', mainHeader);

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
  addTask.innerHTML =
    '<svg width="15px" height="15px" viewBox="0 -0.5 9 9" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>plus_mini [#1523]</title><desc>Created with Sketch.</desc><defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Dribbble-Light-Preview" transform="translate(-345.000000, -206.000000)" fill="#000000"><g id="icons" transform="translate(56.000000, 160.000000)"><polygon id="plus_mini-[#1523]" points="298 49 298 51 294.625 51 294.625 54 292.375 54 292.375 51 289 51 289 49 292.375 49 292.375 46 294.625 46 294.625 49"></polygon></g></g></g></svg>' +
    '<div> Add task</div>';
};

// create form to add a new task
const createTaskForm = () => {
  // container for new task form
  const newTaskCont = document.getElementById('new-task-cont');
  const taskForm = createAndAppend('div', null, 'task-form', null, newTaskCont);

  // container for title label and input
  const titleCont = createAndAppend(
    'div',
    'form-title-cont',
    null,
    null,
    taskForm,
  );

  // label for title of task
  const textLabel = createAndAppend('label', null, null, 'Title:', titleCont);
  textLabel.setAttribute('for', 'project-input');

  // text input for inputting title of task
  const textInput = createAndAppend(
    'input',
    null,
    'project-input',
    null,
    titleCont,
  );
  textInput.setAttribute('placeholder', 'What will you do?');
  textInput.setAttribute('maxlength', '50');

  // container for date label and input
  const dateCont = createAndAppend(
    'div',
    'form-date-cont',
    null,
    null,
    taskForm,
  );

  // label for Date
  const dateLabel = createAndAppend('label', null, null, 'Due Date:', dateCont);
  dateLabel.setAttribute('for', 'date-input');

  // select due date
  const dateInput = createAndAppend(
    'input',
    null,
    'date-input',
    null,
    dateCont,
  );
  dateInput.setAttribute('type', 'date');

  // select options for projects
  const selectCont = createAndAppend(
    'div',
    null,
    'form-select-cont',
    null,
    taskForm,
  );

  // label for project selection
  const projLabel = createAndAppend(
    'label',
    null,
    null,
    'Project:',
    selectCont,
  );
  projLabel.setAttribute('for', 'project-select');

  createAndAppend('select', null, 'project-select', null, selectCont);

  const formBtnCont = createAndAppend(
    'div',
    'form-btn-cont',
    null,
    null,
    taskForm,
  );

  // button to submit new task
  createAndAppend(
    'button',
    'task-form-btns',
    'create-task-btn',
    'Add',
    formBtnCont,
  );

  // button to cancel adding new task
  createAndAppend(
    'button',
    'task-form-btns',
    'cancel-task-btn',
    'Cancel',
    formBtnCont,
  );
  taskForm.style.display = 'none';
};

// loads page with example tasks
const exampleTasks = () => {
  const date = new Date();
  const currentDate = format(date, 'MM/dd/yyy');

  const task1 = taskFactory(
    'The Odin Project',
    'Create modules for Home sidebar buttons',
  );
  task1.setDueDate(currentDate);
  task1.taskInfo.unformattedDate = date;
  tasksArr.push(task1);

  const task2 = taskFactory('The Odin Project', 'Create editTask function');
  tasksArr.push(task2);

  const task3 = taskFactory('The Odin Project', 'Create deleteTask function');
  task3.setDueDate(currentDate);
  task3.taskInfo.unformattedDate = date;
  tasksArr.push(task3);

  const task4 = taskFactory('The Odin Project', 'Add checkbox to tasks');
  tasksArr.push(task4);
};

// create pop up for editing tasks
const editTaskPopUp = () => {
  const mainBody = document.getElementById('main-body');

  const editPopUp = createAndAppend('div', null, 'edit-popup', null, mainBody);
  createAndAppend('div', null, null, 'Edit', editPopUp);

  // task title
  const editTitle = createAndAppend(
    'input',
    null,
    'edit-title',
    null,
    editPopUp,
  );
  editTitle.setAttribute('maxlength', '50');

  // task description
  const editDesc = createAndAppend('input', null, 'edit-desc', null, editPopUp);
  editDesc.setAttribute('placeholder', 'Write a description');

  // task due date
  const editDate = createAndAppend('input', null, 'edit-date', null, editPopUp);
  editDate.setAttribute('type', 'date');

  // task priority
  const labelPriority = createAndAppend(
    'label',
    null,
    null,
    'Priority: ',
    editPopUp,
  );
  labelPriority.setAttribute('for', 'edit-priority');
  const editPri = createAndAppend(
    'select',
    null,
    'edit-priority',
    null,
    editPopUp,
  );

  const noPri = createAndAppend('option', null, null, '', editPri);
  noPri.value = '';
  const lowPri = createAndAppend('option', null, null, 'Low', editPri);
  lowPri.value = 'low';
  const medPri = createAndAppend('option', null, null, 'Medium', editPri);
  medPri.value = 'medium';
  const hiPri = createAndAppend('option', null, null, 'High', editPri);
  hiPri.value = 'high';
  const urgPri = createAndAppend('option', null, null, 'Urgent', editPri);
  urgPri.value = 'urgent';

  // save and cancel buttons
  createAndAppend('button', null, 'save-task-btn', 'Save', editPopUp);
  createAndAppend('button', null, 'cancel-edit-btn', 'Cancel', editPopUp);
  editPopUp.style.display = 'none';
};

// load main page content
const pageload = () => {
  createHeader();
  const mainBody = document.getElementById('main-body');

  // container for new task form
  createTaskForm();

  // container for list of tasks
  createAndAppend('div', null, 'task-list', null, mainBody);

  // preload page with some example tasks
  exampleTasks();

  // Load task list with current tasks
  for (let i = 0; i < tasksArr.length; i += 1) {
    appendTask(tasksArr[i], true);
  }

  // create pop up for editing task
  editTaskPopUp();
};

export { pageload };
