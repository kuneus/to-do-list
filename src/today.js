import {
  createAndAppend,
  projectsArr,
  appendTask,
  taskFactory,
  loadTasks,
  tasksArr,
  loadHomeTasks,
} from './index';
import { format, parseISO } from 'date-fns';

const today = () => {
  const pageTitle = document.getElementById('page-title');
  const projSelect = document.getElementById('project-select');

  pageTitle.textContent = 'Today';

  loadHomeTasks('today');

  projSelect.style.display = '';
};

export { today };
