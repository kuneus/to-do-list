import {
  createAndAppend,
  ProjectFactory,
  projectsArr,
  taskFactory,
  tasksArr,
  appendTask,
  createTaskForm,
  submitTask,
  pageInfo,
} from './index';
import { format } from 'date-fns';

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
    'All Tasks',
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
  createTaskForm(true);

  const taskForm = document.getElementById('task-form');
  const selectInput = document.getElementById('project-select');
  const textInput = document.getElementById('project-input');
  const createTaskBtn = document.getElementById('create-task-btn');
  const dateInput = document.getElementById('date-input');

  // default to hidden task form
  taskForm.style.display = 'none';

  // display task form container
  addTask.addEventListener('click', () => {
    taskForm.style.display = 'block';
    addTask.style.display = 'none';

    // if on 'today' page, display today's date for date input
    if (pageInfo.currentHomePage === 'Today') {
      const today = format(new Date(), 'yyyy-MM-dd');
      dateInput.value = today;
    } else {
      dateInput.value = '';
    }

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
    submitTask();
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
  })();

  // Load task list with current tasks
  for (let i = 0; i < tasksArr.length; i += 1) {
    appendTask(tasksArr[i], true);
  }

  (function editTaskPopUp() {
    const editPopUp = createAndAppend(
      'div',
      null,
      'edit-popup',
      null,
      mainBody,
    );
    createAndAppend('div', null, null, 'Edit', editPopUp);

    // task title
    createAndAppend('input', null, 'edit-title', null, editPopUp);

    // task description
    const editDesc = createAndAppend(
      'input',
      null,
      'edit-desc',
      null,
      editPopUp,
    );
    editDesc.setAttribute('placeholder', 'Write a description');

    // task due date
    const editDate = createAndAppend(
      'input',
      null,
      'edit-date',
      null,
      editPopUp,
    );
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
  })();
};

export { pageload };
