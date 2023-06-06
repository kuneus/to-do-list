import { loadTasks } from './index';
// createAndAppend(elementType, eleClass, eleID, eleText, eleParent)

const projectPages = (project) => {
  const pageTitle = document.getElementById('page-title');
  const projSelect = document.getElementById('project-select');

  // set title of page to Project's title
  pageTitle.textContent = project.title;

  // load page with project's tasks
  loadTasks(project);

  projSelect.style.display = 'none';
};

export { projectPages };
