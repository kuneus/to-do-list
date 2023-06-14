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

const addBorderStyle = (taskPriority, taskCard) => {
  switch (taskPriority) {
    case '':
      taskCard.style.borderLeft = '';
      break;
    case 'low':
      taskCard.style.borderLeft = 'solid 15px yellow';
      break;
    case 'medium':
      taskCard.style.borderLeft = 'solid 15px Orange';
      break;
    case 'high':
      taskCard.style.borderLeft = 'solid 15px red';
      break;
    case 'urgent':
      taskCard.style.borderLeft = 'solid 15px crimson';
      break;
    default:
  }
};

export {
  createAndAppend,
  ProjectFactory,
  projectsArr,
  taskFactory,
  tasksArr,
  pageInfo,
  addBorderStyle,
};
