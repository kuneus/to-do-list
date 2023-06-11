import { format, parseISO } from 'date-fns';
import {
  createAndAppend,
  taskFactory,
  pageInfo,
  projectsArr,
  tasksArr,
  appendTask,
} from './index';

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
    addTaskBtn.style.display = 'block';
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

export { createEventListener };