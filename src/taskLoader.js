import { parseISO, format, add, isWithinInterval } from 'date-fns';
import { tasksArr } from './index';
import { appendTask } from './createTask';
import { loadDeletedTasks } from './deleteTask';

// loads tasks for the home page called
function loadHomeTasks(page) {
  const date = new Date(); // not formatted
  const currentDate = format(date, 'MM/dd/yyy');
  const sevenDays = add(date, { days: 7 });

  // find tasks that matches the home page criteria
  for (let i = 0; i < tasksArr.length; i += 1) {
    const parsedTaskDate = parseISO(tasksArr[i].taskInfo.unformattedDate);

    if (tasksArr[i].taskInfo.completion === false) {
      switch (page) {
        case 'Today':
          if (currentDate === tasksArr[i].taskInfo.dueDate) {
            appendTask(tasksArr[i], true);
          }
          break;
        case 'Upcoming': // tasks due in the next 7 days
          if (
            isWithinInterval(parsedTaskDate, {
              start: date,
              end: sevenDays,
            })
          ) {
            appendTask(tasksArr[i], true);
          }
          break;
        case 'All Tasks': // append all tasks
          appendTask(tasksArr[i], true);
          break;
        default:
      }
    } else if (
      // for 'completed' page
      tasksArr[i].taskInfo.completion === true &&
      page === 'Completed'
    ) {
      appendTask(tasksArr[i], true);
    }
  }

  // separate function if Trash page is clicked
  if (page === 'Trash') {
    loadDeletedTasks();
  }
}

// loads task container with tasks for the project page called
function loadProjTasks(page) {
  for (let i = 0; i < tasksArr.length; i += 1) {
    // if task matches the project page, append that task to that page
    if (page.title === tasksArr[i].project) {
      // append tasks that are incomplete
      if (tasksArr[i].taskInfo.completion === false) {
        appendTask(tasksArr[i]);
      }
    }
  }
}

export { loadHomeTasks, loadProjTasks };
