/* eslint-disable no-alert */
import { loadProjTasks } from './taskLoader';
import {
  ProjectFactory,
  projectsArr,
  updateStorage,
  createAndAppend,
} from './toExport';

// Change displays for new project buttons from 'none' to 'block'
function changeBtnDisplay() {
  const projectFormCont = document.getElementById('project-form-btns');
  const newProjectBtn = document.getElementById('new-project-btn');
  if (projectFormCont.style.display === 'flex') {
    projectFormCont.style.display = 'none';
    newProjectBtn.style.display = 'flex';
  } else {
    projectFormCont.style.display = 'flex';
    newProjectBtn.style.display = 'none';
  }
}

// Add project name submission to the DOM project list
const appendProj = (projTitle) => {
  const projCont = document.getElementById('projects-list');
  const projectTextField = document.getElementById('project-textfield');

  // create li element and append to project list
  const liEle = createAndAppend('li', null, null, null, projCont);

  // create button inside li element
  createAndAppend('button', 'sb-btns projects', null, projTitle, liEle);

  // clear text field after submission
  projectTextField.value = '';
};

// append example project to project list if no projects in storage
const exampleProject = () => {
  if (!localStorage.getItem('projectsArr')) {
    console.log('no projects in local storage, add exampleProj');
    const exampleProj = ProjectFactory('General stuff');
    projectsArr.push(exampleProj);
    appendProj(exampleProj.title);

    updateStorage('projects');
  }
};

// creates new project and appends it to the project list in sidebar
const createNewProject = () => {
  const projectTextField = document.getElementById('project-textfield');
  const projName = projectTextField.value;

  // create array of titles of projects to find duplicates in next block
  const projTitleArray = [];
  for (let i = 0; i < projectsArr.length; i += 1) {
    projTitleArray.push(projectsArr[i].title);
  }

  console.log('projTitleArray = ' + projTitleArray);
  if (projName === '') {
    // empty submission
    alert('Please submit a project name');
  } else if (projTitleArray.includes(projName)) {
    // duplicate submission
    alert('You already have a project with that title!');
  } else {
    // create new project object and push and append it
    const newProj = ProjectFactory(projName);
    projectsArr.push(newProj);
    appendProj(newProj.title);

    // add project to storage
    updateStorage('projects');
  }
};

const projectEventListeners = () => {
  const sidebar = document.getElementById('sidebar-cont');

  sidebar.addEventListener('click', (e) => {
    // change display for project form submission
    if (e.target.classList.contains('project-btns')) {
      changeBtnDisplay();
    }

    // when new project is submitted to project list
    if (e.target.getAttribute('id') === 'new-project-submit') {
      createNewProject();
    }
  });
};

const projectPages = (project) => {
  const pageTitle = document.getElementById('page-title');
  const selectCont = document.getElementById('form-select-cont');
  const deleteProjBtn = document.getElementById('delete-project-btn');

  // set title of page to Project's title
  pageTitle.textContent = project.title;

  // load page with project's tasks
  loadProjTasks(project);

  // hide project selection options within task form since not needed for this module
  selectCont.style.display = 'none';

  deleteProjBtn.style.display = 'block';
};

export { projectPages, projectEventListeners, exampleProject, appendProj };
