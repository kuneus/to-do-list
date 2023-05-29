import './styles.css';
import { projectPages } from './projects';
import { pageload } from './pageload';

const projCont = document.getElementById('projects-list');
const newProjectBtn = document.getElementById('new-project-btn');
const projectFormCont = document.getElementById('project-form-btns');
const submitProjectBtn = document.getElementById('new-project-submit');
const projectBtns = document.getElementsByClassName('project-btns');
const projectTextField = document.getElementById('project-textfield');
const projectListBtns = document.getElementsByClassName('projects');
const homeBtns = document.getElementsByClassName('home-btns');

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

// need to create a class and make the following function a method within the class
// Add project name submission to the DOM project list
function appendNewProject(title) {
  // create li element and append to project list
  const liEle = createAndAppend('li', null, null, null, projCont);

  // create button inside li element

  createAndAppend('button', 'sb-btns projects', null, title, liEle);

  // clear text field
  projectTextField.value = '';
}

// factory fn for creating new project
function ProjectFactory(title) {
  const tasks = [];
  const addTask = (taskObj) => {
    // logic to add new to-do to tasks array
    tasks.push(taskObj);
  };
  return { title, tasks, addTask };
}

// factory fn for creating new to-do task
function taskFactory(project, title) {
  let taskInfo = {
    dueDate: '',
    priority: '',
    description: '',
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

const projectsArr = [];
const tasksArr = [];

// append example project to project list
(function exampleProject() {
  let exampleProj = ProjectFactory('The Odin Project');
  projectsArr.push(exampleProj);
  appendNewProject(exampleProj.title);
})();

// event listener to add and create new project
submitProjectBtn.addEventListener('click', () => {
  let projName = projectTextField.value;
  if (projName === '') {
    alert('Please submit a project name');
  } else {
    let newProj = ProjectFactory(projName);
    projectsArr.push(newProj);
    appendNewProject(newProj.title);
  }
});

// event listeners for project list
projCont.addEventListener('click', (e) => {
  if (e.target.classList.contains('projects')) {
    const projTitle = e.target.textContent;
    console.log('project title: ' + projTitle);

    for (let i = 0; i < projectsArr.length; i += 1) {
      if (projectsArr[i].title === projTitle) {
        // open projects module with project index
        projectPages(projectsArr[i]);
      }
    }
  }
});

pageload();
export { createAndAppend, projectsArr, taskFactory, tasksArr };

// event listener for sidebar elements to display clicked module

// export array of projects to use for projects module

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
- setPageStatus


-ARRAYS:
    -> tasksArr
    -> projectsArr
    -> trashArr
    -> doneArr



*/
