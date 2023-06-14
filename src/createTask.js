import { format, parseISO } from 'date-fns';
import {
  createAndAppend,
  taskFactory,
  pageInfo,
  projectsArr,
  tasksArr,
  addBorderStyle,
} from './toExport';

// append new task card
const appendTask = (task, displayProj) => {
  const taskList = document.getElementById('task-list');
  const taskCard = document.createElement('div');
  taskCard.setAttribute('class', 'task-card');
  taskList.prepend(taskCard);

  // display project of task for home buttons
  if (displayProj === true) {
    createAndAppend('div', 'card-project', null, task.project, taskCard);
  } else {
    // create empty div if viewing projects
    createAndAppend('div', 'card-project', null, null, taskCard);
  }

  // container for middle contents of task card
  const middleCont = createAndAppend(
    'div',
    'midline-card',
    null,
    null,
    taskCard,
  );

  const checkBox = createAndAppend('input', 'checkbox', null, null, middleCont);
  checkBox.setAttribute('type', 'checkbox');
  // check box if current task is complete
  if (task.taskInfo.completion === true) {
    checkBox.checked = true;
  }

  // display title of task
  createAndAppend('div', 'card-title', null, task.title, middleCont);

  // display due date of task
  const dateLine = createAndAppend(
    'div',
    'card-date',
    null,
    task.taskInfo.dueDate,
    middleCont,
  );
  if (task.taskInfo.dueDate === '') {
    dateLine.textContent = 'No due date';
  }

  addBorderStyle(task.taskInfo.priority, taskCard);

  // edit task button
  const editBtn = createAndAppend(
    'button',
    'edit-btn card-btns',
    null,
    'edit',
    middleCont,
  );
  editBtn.innerHTML =
    '<svg fill="#000000" width="25px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.548,3.452a1.542,1.542,0,0,1,0,2.182L12.912,13.27,9.639,14.361l1.091-3.273,7.636-7.636A1.542,1.542,0,0,1,20.548,3.452ZM4,21H19a1,1,0,0,0,1-1V12a1,1,0,0,0-2,0v7H5V6h7a1,1,0,0,0,0-2H4A1,1,0,0,0,3,5V20A1,1,0,0,0,4,21Z"/></svg>';

  // delete task button
  const deleteBtn = createAndAppend(
    'button',
    'delete-btn card-btns',
    null,
    'delete',
    middleCont,
  );
  deleteBtn.innerHTML =
    '<svg width="25px" height="25px" viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:none;stroke:#020202;stroke-miterlimit:10;stroke-width:1.91px;}</style></defs><path class="cls-1" d="M16.88,22.5H7.12a1.9,1.9,0,0,1-1.9-1.8L4.36,5.32H19.64L18.78,20.7A1.9,1.9,0,0,1,16.88,22.5Z"/><line class="cls-1" x1="2.45" y1="5.32" x2="21.55" y2="5.32"/><path class="cls-1" d="M10.09,1.5h3.82a1.91,1.91,0,0,1,1.91,1.91V5.32a0,0,0,0,1,0,0H8.18a0,0,0,0,1,0,0V3.41A1.91,1.91,0,0,1,10.09,1.5Z"/><line class="cls-1" x1="12" y1="8.18" x2="12" y2="19.64"/><line class="cls-1" x1="15.82" y1="8.18" x2="15.82" y2="19.64"/><line class="cls-1" x1="8.18" y1="8.18" x2="8.18" y2="19.64"/></svg>';

  // empty bottom container of task card
  createAndAppend('div', null, null, null, taskCard);
};

// function to take task form input and submit task
const submitTask = () => {
  const textInput = document.getElementById('project-input');
  const dateInput = document.getElementById('date-input');
  const selectInput = document.getElementById('project-select');
  const formattedToday = format(new Date(), 'yyyy-MM-dd');

  if (textInput.value !== '') {
    const newTask = taskFactory(selectInput.value, textInput.value);

    // format date input
    if (dateInput.value !== '') {
      const parseDate = parseISO(dateInput.value);
      const formattedDate = format(parseDate, 'MM/dd/yyyy');
      newTask.setDueDate(formattedDate);
      newTask.taskInfo.unformattedDate = dateInput.value;
    } else {
      newTask.setDueDate('');
    }

    // check if in project module
    if (pageInfo.currentProject !== '') {
      // set task's project as current project selected without
      // appending the project title to each task card
      newTask.project = pageInfo.currentProject;
      tasksArr.push(newTask);
      appendTask(newTask, false);
    } else {
      // if in home page module
      tasksArr.push(newTask);
      // append task to current task list if not on Today page
      if (pageInfo.currentHomePage !== 'Today') {
        appendTask(newTask, true);
      } else if (dateInput.value === formattedToday) {
        // if in Today page, only append the new task if it's due today
        appendTask(newTask, true);
      }
    }
  } else {
    // eslint-disable-next-line no-alert
    alert('please submit a title for your task!');
  }
};

const displayDateInput = () => {
  const dateInput = document.getElementById('date-input');

  // if on 'today' page, display today's date for date input
  if (pageInfo.currentHomePage === 'Today') {
    const today = format(new Date(), 'yyyy-MM-dd');
    dateInput.value = today;
  } else {
    dateInput.value = '';
  }
};

const updateProjectSelection = () => {
  const projSelect = document.getElementById('project-select');

  // clear project select options
  projSelect.innerHTML = '';

  // update select options with current projects
  for (let i = 0; i < projectsArr.length; i += 1) {
    const option = createAndAppend(
      'option',
      null,
      null,
      projectsArr[i].title,
      projSelect,
    );
    option.value = projectsArr[i].title;
  }
};

const switchTaskFormDisplay = (setting) => {
  const taskForm = document.getElementById('task-form');
  const textInput = document.getElementById('project-input');
  const addTaskBtn = document.getElementById('add-task-btn');

  if (setting === 'off') {
    // hide task form
    taskForm.style.display = 'none';
    addTaskBtn.style.display = 'flex';
    textInput.value = '';
  } else if (setting === 'on') {
    // display task form
    taskForm.style.display = 'block';
    addTaskBtn.style.display = 'none';

    // update date value
    displayDateInput();

    // updates selection of projects
    updateProjectSelection();
  }
};

const createEventListener = () => {
  const mainBody = document.getElementById('main-body');

  mainBody.addEventListener('click', (e) => {
    // if create task button clicked
    if (e.target.getAttribute('id') === 'create-task-btn') {
      submitTask();
    }

    // hide task form and return display to add task button
    if (e.target.classList.contains('task-form-btns')) {
      switchTaskFormDisplay('off');
    }

    // display task form and hide add task button
    if (e.target.getAttribute('id') === 'add-task-btn') {
      switchTaskFormDisplay('on');
    }
  });
};

export { createEventListener, appendTask };
