import './styles.css';
import { projectPages } from './projects';
import { pageload } from './pageload';
import { today } from './today';
import { format, parseISO, add, isWithinInterval, parse } from 'date-fns';
import { completeTask } from './completed';

const projCont = document.getElementById('projects-list');
const newProjectBtn = document.getElementById('new-project-btn');
const projectFormCont = document.getElementById('project-form-btns');
const submitProjectBtn = document.getElementById('new-project-submit');
const projectBtns = document.getElementsByClassName('project-btns');
const projectTextField = document.getElementById('project-textfield');
const homeBtns = document.getElementsByClassName('home-btns');
const mainBody = document.getElementById('main-body');

// create HTML element and append to DOM
function createAndAppend(elementType, eleClass, eleID, eleText, eleParent) {
  let element = document.createElement(elementType);
  if (eleClass) {
    element.setAttribute('class', eleClass);
  }
  if (eleID) {
    element.setAttribute('id', eleID);
  }
  if (eleText) {
    element.textContent = eleText;
  }
  eleParent.appendChild(element);
  return element;
}

const projectsArr = [];
const tasksArr = [];

// use to find current task or element selected
const pageInfo = {
  currentTask: '',
  currentProject: '',
  currentElement: '',
  currentHomePage: '',
};

// factory fn for creating new project
function ProjectFactory(title) {
  // Add project name submission to the DOM project list
  const append = (projTitle) => {
    // create li element and append to project list
    const liEle = createAndAppend('li', null, null, null, projCont);

    // create button inside li element
    createAndAppend('button', 'sb-btns projects', null, projTitle, liEle);

    // clear text field
    projectTextField.value = '';
  };

  return { title, append };
}

// factory fn for creating new to-do task
function taskFactory(project, title) {
  const taskInfo = {
    dueDate: '',
    priority: '',
    description: '',
    completion: false,
    unformattedDate: '',
  };

  const setDueDate = (date) => {
    taskInfo.dueDate = date;
  };

  const setPriority = (setting) => {
    taskInfo.priority = setting;
  };

  return {
    project,
    title,
    taskInfo,
    setDueDate,
    setPriority,
  };
}

const createTaskForm = (bool) => {
  // container for new task form
  const newTaskCont = document.getElementById('new-task-cont');
  const taskForm = createAndAppend('div', null, 'task-form', null, newTaskCont);

  // label for title of task
  const textLabel = createAndAppend('label', null, null, 'Title:', taskForm);
  textLabel.setAttribute('for', 'project-input');

  // text input for inputting title of task
  const textInput = createAndAppend(
    'input',
    null,
    'project-input',
    null,
    taskForm,
  );
  textInput.setAttribute('placeholder', 'What will you do?');

  // label for Date
  const dateLabel = createAndAppend('label', null, null, 'Due Date:', taskForm);
  dateLabel.setAttribute('for', 'date-input');

  // select due date
  const dateInput = createAndAppend(
    'input',
    null,
    'date-input',
    null,
    taskForm,
  );
  dateInput.setAttribute('type', 'date');

  // select options for projects
  if (bool === true) {
    const selectCont = createAndAppend(
      'div',
      null,
      'select-cont',
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
  }

  // button to submit new task
  createAndAppend(
    'button',
    'task-form-btns',
    'create-task-btn',
    'Add',
    taskForm,
  );

  // button to cancel adding new task
  createAndAppend(
    'button',
    'task-form-btns',
    'cancel-task-btn',
    'Cancel',
    taskForm,
  );
  taskForm.style.display = 'none';
};

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

  // edit card button
  const editBtn = createAndAppend(
    'button',
    'edit-btn',
    null,
    'edit',
    middleCont,
  );

  // empty bottom container of task card
  const bottomCont = createAndAppend('div', null, null, null, taskCard);
};

// loads task container with tasks for the project page called
function loadTasks(page) {
  for (let i = 0; i < tasksArr.length; i += 1) {
    // if task matches the project page, append that task to that page
    if (page.title === tasksArr[i].project) {
      // append tasks that are incomplete
      if (tasksArr[i].taskInfo.completion === false) {
        appendTask(tasksArr[i]);
      }
    }
  }
}

// loads tasks for the home page called
function loadHomeTasks(page) {
  const date = new Date(); // not formatted
  const currentDate = format(date, 'MM/dd/yyy');
  const sevenDays = add(date, { days: 7 });

  // find tasks that matches the home page criteria
  for (let i = 0; i < tasksArr.length; i += 1) {
    const parsedTaskDate = parseISO(tasksArr[i].taskInfo.unformattedDate);

    if (tasksArr[i].taskInfo.completion === false) {
      switch (page) {
        case 'Today':
          if (currentDate === tasksArr[i].taskInfo.dueDate) {
            appendTask(tasksArr[i], true);
          }
          break;
        case 'Upcoming': // tasks due in the next 7 days
          if (
            isWithinInterval(parsedTaskDate, {
              start: date,
              end: sevenDays,
            })
          ) {
            appendTask(tasksArr[i], true);
            // **** REMOVE TASK FORM, DO NOT NEED TO ADD TASKS HERE
          }
          break;
        case 'All Tasks': // append all tasks
          appendTask(tasksArr[i], true);
          break;
        case 'Trash': // if task was deleted
          console.log('deleted tasks');
          // **** NEED LOGIC FOR DELETING TASK ****
          // **** REMOVE TASK FORM, DO NOT NEED TO ADD TASKS HERE
          break;
        default:
      }
    } else if (
      // for 'completed' page
      tasksArr[i].taskInfo.completion === true &&
      page === 'Completed'
    ) {
      appendTask(tasksArr[i], true);
      // **** REMOVE TASK FORM, DO NOT NEED TO ADD TASKS HERE
    }
  }
}

// Change displays for new project buttons from 'none' to 'block'
function changeBtnDisplay() {
  if (projectFormCont.style.display === 'flex') {
    projectFormCont.style.display = 'none';
    newProjectBtn.style.display = 'block';
  } else {
    projectFormCont.style.display = 'flex';
    newProjectBtn.style.display = 'none';
  }
}

// event listener to change display for project form submission
Array.from(projectBtns).forEach((element) => {
  element.addEventListener('click', () => {
    changeBtnDisplay();
  });
});

// append example project to project list
(function exampleProject() {
  let exampleProj = ProjectFactory('The Odin Project');
  projectsArr.push(exampleProj);
  exampleProj.append(exampleProj.title);
})();

// event listener to add and create new project
submitProjectBtn.addEventListener('click', () => {
  let projName = projectTextField.value;
  if (projName === '') {
    alert('Please submit a project name');
  } else {
    let newProj = ProjectFactory(projName);
    projectsArr.push(newProj);
    newProj.append(newProj.title);
  }
});

// display task form for project pages, 'today', and 'upcoming'
const toggleTaskFormDisplay = (display) => {
  const newTaskCont = document.getElementById('new-task-cont');
  if (display === true) {
    newTaskCont.style.display = '';
  } else {
    newTaskCont.style.display = 'none';
  }
};

// event listeners to open project page
projCont.addEventListener('click', (e) => {
  const taskList = document.getElementById('task-list');
  if (e.target.classList.contains('projects')) {
    const projTitle = e.target.textContent;

    for (let i = 0; i < projectsArr.length; i += 1) {
      // find project page in array
      if (projectsArr[i].title === projTitle) {
        // clear tasks
        taskList.innerHTML = '';

        // display selected project's tasks
        projectPages(projectsArr[i]);
        pageInfo.currentProject = projectsArr[i].title;
      }

      toggleTaskFormDisplay(true);
    }
  }
});

// function to take task form input and submit task
const submitTask = () => {
  const textInput = document.getElementById('project-input');
  const dateInput = document.getElementById('date-input');
  const selectInput = document.getElementById('project-select');

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
    if (selectInput.style.display === 'none') {
      // set task's project as current project selected without
      // appending the project title to each task card
      newTask.project = pageInfo.currentProject;
      tasksArr.push(newTask);
      appendTask(newTask, false);
    } else {
      tasksArr.push(newTask);
      appendTask(newTask, true);
    }
  } else {
    alert('please submit a title for your task!');
  }
};

// event listeners for home button modules
Array.from(homeBtns).forEach((button) => {
  button.addEventListener('click', () => {
    // set current home page
    // not currently needed
    pageInfo.currentHomePage = button.textContent;

    if (
      pageInfo.currentHomePage === 'Today' ||
      pageInfo.currentHomePage === 'All Tasks'
    ) {
      toggleTaskFormDisplay(true);
    } else {
      toggleTaskFormDisplay(false);
    }

    const taskList = document.getElementById('task-list');
    const pageTitle = document.getElementById('page-title');
    const projSelect = document.getElementById('project-select');
    const selectCont = document.getElementById('select-cont');

    taskList.innerHTML = '';
    pageTitle.textContent = button.textContent;
    selectCont.style.display = '';
    loadHomeTasks(button.textContent);
  });
});

// open/close edit task popup
const toggleEdit = () => {
  const popupCont = document.getElementById('edit-popup');
  if (popupCont.style.display === 'block') {
    popupCont.style.display = 'none';
  } else if (popupCont.style.display === 'none') {
    popupCont.style.display = 'block';
  }
};

// populate edit popup with clicked task's information to edit
const populateEdit = (task) => {
  const editTitle = document.getElementById('edit-title');
  const editDesc = document.getElementById('edit-desc');
  const editDate = document.getElementById('edit-date');
  const editPri = document.getElementById('edit-priority');
  editTitle.value = task.title;
  editDesc.value = task.taskInfo.description;
  editDate.value = task.taskInfo.dueDate;
  editPri.value = task.taskInfo.priority;
};

// update currently selected task object following save edit
const updateTaskObj = (task) => {
  const editTitle = document.getElementById('edit-title');
  const editDesc = document.getElementById('edit-desc');
  const editDate = document.getElementById('edit-date');
  const editPri = document.getElementById('edit-priority');

  task.title = editTitle.value;
  task.taskInfo.description = editDesc.value;
  // update date with new format
  if (editDate.value !== '') {
    const parseDate = parseISO(editDate.value);
    const formattedDate = format(parseDate, 'MM/dd/yyyy');
    task.taskInfo.dueDate = formattedDate;
    task.taskInfo.unformattedDate = editDate.value;
  } else {
    task.taskInfo.dueDate = 'No due date';
  }
  task.taskInfo.priority = editPri.value;
};

// update currently selected task element following save edit
const updateTaskEl = (task, index) => {
  const cardTitle = document.getElementsByClassName('card-title');
  const cardDate = document.getElementsByClassName('card-date');

  Array.from(cardTitle)[index].textContent = task.title;
  Array.from(cardDate)[index].textContent = task.taskInfo.dueDate;
};

// open edit task card with current task card clicked
mainBody.addEventListener('click', (e) => {
  if (e.target.classList.contains('edit-btn')) {
    // identify title of task
    const findTitle = e.target.previousElementSibling.previousElementSibling;

    // find the task with corresponding title
    for (let i = 0; i < tasksArr.length; i += 1) {
      if (tasksArr[i].title === findTitle.textContent) {
        // update current task selected
        pageInfo.currentTask = tasksArr[i];
        toggleEdit();
        populateEdit(tasksArr[i]);
      }
    }

    // find current element selected within the class array
    const elementClass = document.getElementsByClassName('card-title');
    const arr = Array.from(elementClass);
    for (let i = 0; i < arr.length; i += 1) {
      if (findTitle === arr[i]) {
        pageInfo.currentElement = i;
      }
    }
  }
});

// close edit popup when 'save' or 'cancel' is clicked
mainBody.addEventListener('click', (e) => {
  if (
    e.target.getAttribute('id') === 'cancel-edit-btn' ||
    e.target.getAttribute('id') === 'save-task-btn'
  ) {
    toggleEdit();
  }
});

// event listener for 'save' button when editing todo card
mainBody.addEventListener('click', (e) => {
  if (e.target.getAttribute('id') === 'save-task-btn') {
    // find current task
    for (let i = 0; i < tasksArr.length; i += 1) {
      if (tasksArr[i] === pageInfo.currentTask) {
        // update the task object and its DOM elements
        updateTaskObj(tasksArr[i]);
        updateTaskEl(tasksArr[i], pageInfo.currentElement);
      }
    }
  }
});

// **** CURRENT TO-DO:

// 1 ----> still need to figure out how to correctly append due date to date input when
// editing the task card

// 2 ----> create delete button and delete function

// 3 ----> edit task card to indicate priority by changing border color?

// 4 ----> button to display task description??

pageload();
completeTask();
export {
  createAndAppend,
  ProjectFactory,
  projectsArr,
  taskFactory,
  tasksArr,
  appendTask,
  loadTasks,
  loadHomeTasks,
  createTaskForm,
  submitTask,
  pageInfo,
};

/*

Remember SOLID principles!!
-Single responsibility principle
-Open/closed principle
-Liskov substitution principle
-Interface segregation principle
-Dependency inversion principle

**** OUTLINE ****

MODULES:
-pageload
-today
-upcoming
-all tasks
-completed
-trash
-projects


FUNCTIONS, OBJ, & STUFF:
- newProject
    -> push to project array
- to-do factory fn / class
    -> title
    -> description
    -> due date
    -> priority
    -> completion status
    -> push to-do to taskArr
- changePage
    -> change page view to module clicked
- deleteTask
    -> remove from tasksArr and push to trashArr
- completeTask
    -> push to doneArr
- expandTask: display to-do information
- editTask
- setPageStatus


-ARRAYS:
    -> tasksArr
    -> projectsArr
    -> trashArr
    -> doneArr



*/
