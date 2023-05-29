import { createAndAppend, projectsArr } from './index';
// createAndAppend(elementType, eleClass, eleID, eleText, eleParent)

const projectPages = (project) => {
  const mainBody = document.getElementById('main-body');

  mainBody.innerHTML = '';

  // logic here
  const mainHeader = createAndAppend(
    'div',
    null,
    null,
    project.title,
    mainBody,
  );

  const taskHeader = createAndAppend('div', null, null, 'Tasks:', mainBody);
  createAndAppend('button', null, null, 'Add to-do', taskHeader);

  // loop to create DOM elements for each task
};

export { projectPages };
