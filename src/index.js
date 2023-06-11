import './styles.css';
import { projectPages } from './projects';
import { pageload } from './pageload';
import { format, parseISO, add, isWithinInterval, parse } from 'date-fns';
import { completeTask } from './completeTask';
import { deleteEventListeners, loadDeletedTasks } from './deleteTask';
import { createEventListener } from './createTask';
import { editEventListeners } from './editTask';

const projCont = document.getElementById('projects-list');
const newProjectBtn = document.getElementById('new-project-btn');
const projectFormCont = document.getElementById('project-form-btns');
const submitProjectBtn = document.getElementById('new-project-submit');
const projectBtns = document.getElementsByClassName('project-btns');
const projectTextField = document.getElementById('project-textfield');
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

// <----- ***************** ----->
// <----- FACTORY FUNCTIONS ----->
// <----- ***************** ----->

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

// <----- ****************** ----->
// <----- TASK FUNCTIONALITY ----->
// <----- ****************** ----->

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

  // edit card button
  createAndAppend('button', 'edit-btn', null, 'edit', middleCont);
  // delete task button
  createAndAppend('button', 'delete-btn', null, 'delete', middleCont);

  // empty bottom container of task card
  createAndAppend('div', null, null, null, taskCard);
};

const addBorderStyle = (taskPriority, taskCard) => {
  switch (taskPriority) {
    case '':
      taskCard.style.border = 'solid 3px black';
      break;
    case 'low':
      taskCard.style.border = 'solid 3px yellow';
      break;
    case 'medium':
      taskCard.style.border = 'solid 3px Orange';
      break;
    case 'high':
      taskCard.style.border = 'solid 3px red';
      break;
    case 'urgent':
      taskCard.style.border = 'dotted 3px crimson';
      break;
    default:
  }
};

// loads task container with tasks for the project page called
function loadProjTasks(page) {
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
          }
          break;
        case 'All Tasks': // append all tasks
          appendTask(tasksArr[i], true);
          break;
        default:
      }
    } else if (
      // for 'completed' page
      tasksArr[i].taskInfo.completion === true &&
      page === 'Completed'
    ) {
      appendTask(tasksArr[i], true);
    }
  }

  // separate function if Trash page is clicked
  if (page === 'Trash') {
    loadDeletedTasks();
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
  const exampleProj = ProjectFactory('The Odin Project');
  projectsArr.push(exampleProj);
  exampleProj.append(exampleProj.title);
})();

// event listener to add and create new project
submitProjectBtn.addEventListener('click', () => {
  const projName = projectTextField.value;
  if (projName === '') {
    alert('Please submit a project name');
  } else {
    const newProj = ProjectFactory(projName);
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

// <----- ************************ ----->
// <----- SIDE BTN EVENT LISTENERS ----->
// <----- ************************ ----->

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

        // set current page info to project title and clear current home page
        pageInfo.currentProject = projectsArr[i].title;
        pageInfo.currentHomePage = '';
      }

      toggleTaskFormDisplay(true);
    }
  }
});

// event listeners for home button modules
Array.from(homeBtns).forEach((button) => {
  button.addEventListener('click', () => {
    // set current page info to home page clicked and clear project page status
    pageInfo.currentHomePage = button.textContent;
    pageInfo.currentProject = '';

    // only display new task form for 'today' and 'all tasks'
    // do not allow ability to add new tasks for other home page buttons
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
    const selectCont = document.getElementById('form-select-cont');

    // clear task list, set page title, and display project select options
    taskList.innerHTML = '';
    pageTitle.textContent = button.textContent;
    selectCont.style.display = '';

    // load tasks of respective page
    loadHomeTasks(button.textContent);
  });
});

// **** CURRENT TO-DO:
// 1 -----> transfer code to editTask module

// 2 ----> may need to add priority default to 'low' or add a 'none' option

pageload();
completeTask();
deleteEventListeners();
createEventListener();
editEventListeners();
export {
  createAndAppend,
  ProjectFactory,
  projectsArr,
  taskFactory,
  tasksArr,
  appendTask,
  loadProjTasks,
  loadHomeTasks,
  pageInfo,
  addBorderStyle,
};

/*

Remember SOLID principles!!
-Single responsibility principle
-Open/closed principle
-Liskov substitution principle
-Interface segregation principle
-Dependency inversion principle

*/
