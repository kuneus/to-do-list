/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
import {
  updateStorage,
  projectsArr,
  tasksArr,
  trashArr,
  pageInfo,
} from './toExport';
import { openHomePage } from './navBar';

const deleteProjObj = () => {
  for (let i = 0; i < projectsArr.length; i += 1) {
    if (projectsArr[i].title === pageInfo.currentProject) {
      // delete project from array
      projectsArr.splice(i, 1);
      // delete project from storage
      updateStorage('projects');
    }
  }
};

const deleteProjTasks = () => {
  // delete from tasks array
  for (let i = 0; i < tasksArr.length; i += 1) {
    if (tasksArr[i].project === pageInfo.currentProject) {
      tasksArr.splice(i, 1);
    }
  }

  // delete from trash array
  for (let i = 0; i < trashArr.length; i += 1) {
    if (trashArr[i].project === pageInfo.currentProject) {
      trashArr.splice(i, 1);
    }
  }

  updateStorage('tasks');
  updateStorage('trash');
};

const removeProjEl = () => {
  const projects = document.getElementsByClassName('projects');
  const projList = Array.from(projects);

  for (let i = 0; i < projList.length; i += 1) {
    if (projList[i].textContent === pageInfo.currentProject) {
      // delete project element
      projList[i].remove();
    }
  }
};

// switch page to 'All Tasks' page
const switchPage = () => {
  const homeBtns = document.getElementsByClassName('home-btns');
  const homeArr = Array.from(homeBtns);

  openHomePage(homeArr[2]);
};

const deleteProjListener = () => {
  const deleteProjBtn = document.getElementById('delete-project-btn');

  deleteProjBtn.addEventListener('click', () => {
    // confirm with user to delete project and all tasks
    if (
      confirm(
        'Deleting this project will also delete all of its tasks. Are you sure you want to delete this project?',
      )
    ) {
      // delete project and its tasks and update storage
      deleteProjObj();
      deleteProjTasks();

      // delete HTML element from project list in sidebar
      removeProjEl();

      // change page to "All Tasks" page
      switchPage();
    }
  });
};

export { deleteProjListener };
