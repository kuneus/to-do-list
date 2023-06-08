import { loadProjTasks } from './index';
// createAndAppend(elementType, eleClass, eleID, eleText, eleParent)

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

export { projectPages };
