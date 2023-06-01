import {
  createAndAppend,
  projectsArr,
  appendTask,
  taskFactory,
  loadTasks,
  tasksArr,
} from './index';

const today = () => {
  // restart this one
  const mainBody = document.getElementById('main-body');
  const mainHeader = document.getElementById('task-header');
  const pageTitle = document.getElementById('page-title');
  const addTaskBtn = document.getElementById('add-task-btn');
  const taskForm = document.getElementById('task-form');
  const taskList = document.getElementById('task-list');

  pageTitle.textContent = 'Today';
  loadTasks(project);
};

export { today };
