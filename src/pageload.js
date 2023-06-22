import { format } from 'date-fns';
import {
  createAndAppend,
  taskFactory,
  tasksArr,
  trashArr,
  projStorage,
  taskStorage,
  projectsArr,
  trashStorage,
} from './toExport';
import { appendTask } from './createTask';
import { appendProj } from './projects';
import { loadHomeTasks } from './taskLoader';

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

  localStorage.setItem('tasksArr', JSON.stringify(tasksArr));
};

// create pop up for editing tasks
const editTaskPopUp = () => {
  const editPopUp = createAndAppend(
    'div',
    null,
    'edit-popup',
    null,
    document.body,
  );

  // header for Edit popup
  createAndAppend('div', 'edit-header', null, 'Edit', editPopUp);

  const editMiddleCont = createAndAppend(
    'div',
    'edit-middle-cont',
    null,
    null,
    editPopUp,
  );

  // task title
  const editTitle = createAndAppend(
    'input',
    null,
    'edit-title',
    null,
    editMiddleCont,
  );
  editTitle.setAttribute('maxlength', '50');

  // task description
  const editDesc = createAndAppend(
    'textarea',
    null,
    'edit-desc',
    null,
    editMiddleCont,
  );
  editDesc.setAttribute('placeholder', 'Write a description');

  // task due date
  const editDate = createAndAppend(
    'input',
    null,
    'edit-date',
    null,
    editMiddleCont,
  );
  editDate.setAttribute('type', 'date');

  // container for edit priority line
  const editPriorityLine = createAndAppend(
    'div',
    'edit-priority-line',
    null,
    null,
    editMiddleCont,
  );

  // task priority
  const labelPriority = createAndAppend(
    'label',
    null,
    null,
    'Priority: ',
    editPriorityLine,
  );
  labelPriority.setAttribute('for', 'edit-priority');
  const editPri = createAndAppend(
    'select',
    null,
    'edit-priority',
    null,
    editPriorityLine,
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

  const editPopUpBtns = createAndAppend(
    'div',
    'edit-btns-line',
    null,
    null,
    editPopUp,
  );
  // save and cancel buttons
  createAndAppend(
    'button',
    'edit-btns',
    'save-task-btn',
    'Save',
    editPopUpBtns,
  );
  createAndAppend(
    'button',
    'edit-btns',
    'cancel-edit-btn',
    'Cancel',
    editPopUpBtns,
  );
  editPopUp.style.display = 'none';
};

const loadStorage = () => {
  // load task array with current storage if available
  if (localStorage.getItem('tasksArr')) {
    for (let i = 0; i < taskStorage.length; i += 1) {
      tasksArr.push(taskStorage[i]);
    }
  }

  // load projects array with current storage if available
  if (localStorage.getItem('projectsArr')) {
    for (let i = 0; i < projStorage.length; i += 1) {
      projectsArr.push(projStorage[i]);
    }
  }

  // load trash array with deleted tasks if available
  if (localStorage.getItem('trashArr')) {
    for (let i = 0; i < trashStorage.length; i += 1) {
      trashArr.push(trashStorage[i]);
    }
  }
};

// load main page content
const pageload = () => {
  loadStorage();

  createHeader();
  const mainBody = document.getElementById('main-body');

  // container for new task form
  createTaskForm();

  // container for list of tasks
  createAndAppend('div', null, 'task-list', null, mainBody);

  // load page with current or example tasks
  if (!localStorage.getItem('tasksArr')) {
    // if no local storage, then preload page with example tasks
    exampleTasks();
    // Load task list with example tasks
    for (let i = 0; i < tasksArr.length; i += 1) {
      appendTask(tasksArr[i], true);
    }
  } else {
    // Load task list with all current tasks
    loadHomeTasks('All Tasks');
  }

  // append current projects to sidebar
  for (let i = 0; i < projectsArr.length; i += 1) {
    appendProj(projectsArr[i].title);
  }

  // create pop up for editing task
  editTaskPopUp();
};

export { pageload };
