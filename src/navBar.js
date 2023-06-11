import { projectsArr, pageInfo } from './index';
import { projectPages } from './projects';
import { loadHomeTasks } from './taskLoader';

// display task form for project pages, 'today', and 'upcoming'
const toggleTaskFormDisplay = (display) => {
  const newTaskCont = document.getElementById('new-task-cont');
  if (display === true) {
    newTaskCont.style.display = '';
  } else {
    newTaskCont.style.display = 'none';
  }
};

// opens page for specific project clicked
const openProjectPage = (proj) => {
  const taskList = document.getElementById('task-list');
  const projTitle = proj.textContent;

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
};

// opens page for specific home page clicked
const openHomePage = (element) => {
  // set current page info to home page clicked and clear project page status
  pageInfo.currentHomePage = element.textContent;
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
  pageTitle.textContent = element.textContent;
  selectCont.style.display = '';

  // load tasks of respective page
  loadHomeTasks(element.textContent);
};

const navEventListeners = () => {
  const sidebar = document.getElementById('sidebar-cont');

  sidebar.addEventListener('click', (e) => {
    // open a project page
    if (e.target.classList.contains('projects')) {
      openProjectPage(e.target);
    }

    // open a page under the Home category
    if (e.target.classList.contains('home-btns')) {
      openHomePage(e.target);
    }
  });

  //
};

export { navEventListeners };
