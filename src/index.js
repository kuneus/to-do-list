import './styles.css';
import { projectPages } from './projects';
import { pageload } from './pageload';
import { today } from './today';

const projCont = document.getElementById('projects-list');
const newProjectBtn = document.getElementById('new-project-btn');
const projectFormCont = document.getElementById('project-form-btns');
const submitProjectBtn = document.getElementById('new-project-submit');
const projectBtns = document.getElementsByClassName('project-btns');
const projectTextField = document.getElementById('project-textfield');
const projectListBtns = document.getElementsByClassName('projects');
const homeBtns = document.getElementsByClassName('home-btns');
const mainBody = document.getElementById('main-body');
const mainHeader = document.getElementById('task-header');
const taskForm = document.getElementById('task-form');
const projSelect = document.getElementById('project-select');
const editBtns = document.getElementsByClassName('edit-btn');
const checkBox = document.getElementById('checkbox');

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

// append new task card
const appendTask = (task, displayProj) => {
  const taskList = document.getElementById('task-list');
  const taskCard = createAndAppend('div', 'task-card', null, null, taskList);

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

// loads task container with tasks for the page called
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

// Change displays for new project buttons from 'none' to 'block'
function changeBtnDisplay() {
  if (projectFormCont.style.display === 'flex') {
    projectFormCont.style.display = 'none';
  } else {
    projectFormCont.style.display = 'flex';
  }

  if (newProjectBtn.style.display === 'none') {
    newProjectBtn.style.display = 'block';
  } else {
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

// event listeners to open project page
projCont.addEventListener('click', (e) => {
  const taskList = document.getElementById('task-list');
  if (e.target.classList.contains('projects')) {
    const projTitle = e.target.textContent;

    for (let i = 0; i < projectsArr.length; i += 1) {
      if (projectsArr[i].title === projTitle) {
        // clear task list
        taskList.innerHTML = '';

        // open projects module with project index
        projectPages(projectsArr[i]);
      }
    }
  }
});

// event listeners for home button modules
Array.from(homeBtns).forEach((button) => {
  button.addEventListener('click', () => {
    if (button.textContent === 'Today') {
      today();
    }
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

// use to find current task or element selected
const pageInfo = {
  currentTask: '',
  currentProject: '',
  currentElement: '',
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
  task.taskInfo.dueDate = editDate.value;
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

pageload();
export {
  createAndAppend,
  ProjectFactory,
  projectsArr,
  taskFactory,
  tasksArr,
  appendTask,
  loadTasks,
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
