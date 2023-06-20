import { loadProjTasks } from './taskLoader';
import { ProjectFactory, projectsArr } from './toExport';

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

// append example project to project list
const exampleProject = () => {
  const exampleProj = ProjectFactory('The Odin Project');
  projectsArr.push(exampleProj);
  exampleProj.append(exampleProj.title);
};

// creates new project and appends it to the project list in sidebar
const createNewProject = () => {
  const projectTextField = document.getElementById('project-textfield');
  const projName = projectTextField.value;
  if (projName === '') {
    // eslint-disable-next-line no-alert
    alert('Please submit a project name');
  } else {
    const newProj = ProjectFactory(projName);
    projectsArr.push(newProj);
    newProj.append(newProj.title);
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

  // set title of page to Project's title
  pageTitle.textContent = project.title;

  // load page with project's tasks
  loadProjTasks(project);

  // hide project selection options within task form since not needed for this module
  selectCont.style.display = 'none';
};

export { projectPages, projectEventListeners, exampleProject };
