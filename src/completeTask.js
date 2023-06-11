import { pageInfo, tasksArr, projectsArr } from './index';

const completeTask = () => {
  const mainBody = document.getElementById('main-body');
  mainBody.addEventListener('click', (e) => {
    if (e.target.classList.contains('checkbox')) {
      for (let i = 0; i < tasksArr.length; i += 1) {
        const taskTitle = tasksArr[i].title;
        // target element next to checkbox
        const nextSib = e.target.nextElementSibling;

        // find the selected task and update completion status
        if (taskTitle === nextSib.textContent) {
          if (e.target.checked === true) {
            tasksArr[i].taskInfo.completion = true;
          } else {
            tasksArr[i].taskInfo.completion = false;
          }

          // set currently selected task
          pageInfo.currentTask = tasksArr[i];
        }
      }
    }
  });
};

export { completeTask };
