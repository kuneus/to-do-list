/* eslint-disable no-param-reassign */

// create HTML element and append to DOM
function createAndAppend(elementType, eleClass, eleID, eleText, eleParent) {
  const element = document.createElement(elementType);
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

// array for all projects and for all tasks
const projectsArr = [];
const tasksArr = [];
const trashArr = [];

// use to find current task or element selected
const pageInfo = {
  currentTask: '',
  currentProject: '',
  currentElement: '',
  currentHomePage: 'All Tasks',
};

// factory fn for creating new project
function ProjectFactory(title) {
  const projCont = document.getElementById('projects-list');
  const projectTextField = document.getElementById('project-textfield');

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

const addPriority = (taskPriority, cardPriority) => {
  switch (taskPriority) {
    case '':
      // taskCard.style.borderLeft = '';
      cardPriority.textContent = '';
      break;
    case 'low':
      // taskCard.style.borderLeft = 'solid 5px yellow';
      cardPriority.textContent = '❗️';
      break;
    case 'medium':
      // taskCard.style.borderLeft = 'solid 5px Orange';
      cardPriority.textContent = '❗️❗️';
      break;
    case 'high':
      // taskCard.style.borderLeft = 'solid 5px red';
      cardPriority.textContent = '❗️❗️❗️';
      break;
    case 'urgent':
      // taskCard.style.borderLeft = 'solid 5px crimson';
      cardPriority.textContent = '❗️❗️❗️❗️';
      break;
    default:
  }
};

// storage variables
const unparsedProjStorage = localStorage.getItem('projectsArr');
const projStorage = JSON.parse(unparsedProjStorage);
const unparsedTasksStorage = localStorage.getItem('tasksArr');
const taskStorage = JSON.parse(unparsedTasksStorage);
const unparsedTrashStorage = localStorage.getItem('trashArr');
const trashStorage = JSON.parse(unparsedTrashStorage);

const updateStorage = (item) => {
  if (item === 'projects') {
    localStorage.setItem('projectsArr', JSON.stringify(projectsArr));
  } else if (item === 'tasks') {
    localStorage.setItem('tasksArr', JSON.stringify(tasksArr));
  } else if (item === 'trash') {
    localStorage.setItem('trashArr', JSON.stringify(trashArr));
  }
};

export {
  createAndAppend,
  ProjectFactory,
  projectsArr,
  taskFactory,
  tasksArr,
  trashArr,
  pageInfo,
  addPriority,
  projStorage,
  taskStorage,
  updateStorage,
  trashStorage,
};
