import './styles.css';
import { pageload } from './pageload';
import { projectEventListeners, exampleProject } from './projects';
import { navEventListeners } from './navBar';
import { completeEventListener } from './completeTask';
import { deleteEventListeners } from './deleteTask';
import { createEventListener } from './createTask';
import { editEventListeners } from './editTask';

const projCont = document.getElementById('projects-list');
const projectTextField = document.getElementById('project-textfield');

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

// **** CURRENT TO-DO:

// 1 ----> may need to add priority default to 'low' or add a 'none' option

pageload();
exampleProject();
projectEventListeners();
navEventListeners();
completeEventListener();
deleteEventListeners();
createEventListener();
editEventListeners();
export {
  createAndAppend,
  ProjectFactory,
  projectsArr,
  taskFactory,
  tasksArr,
  pageInfo,
};

/*

Remember SOLID principles!!
-Single responsibility principle
-Open/closed principle
-Liskov substitution principle
-Interface segregation principle
-Dependency inversion principle

*/
