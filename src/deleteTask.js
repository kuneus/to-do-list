import { createAndAppend, tasksArr, addBorderStyle } from './index';

const trashArr = [];
const cardValue = { value: '' };

// delete the task card element
const deleteTaskEl = (arg) => {
  const deleteBtns = document.getElementsByClassName('delete-btn');
  const deleteArr = Array.from(deleteBtns);
  const taskCard = document.getElementsByClassName('task-card');
  const cardArr = Array.from(taskCard);
  const cardTitle = document.getElementsByClassName('card-title');
  const cardTitleArr = Array.from(cardTitle);

  // find the task card element to be deleted by matching for its index
  for (let i = 0; i < deleteArr.length; i += 1) {
    if (arg === deleteArr[i]) {
      // store the title of the task in an obj to be used for next loop
      cardValue.value = cardTitleArr[i].textContent;
      cardArr[i].remove();
    }
  }
};

// delete task object
const deleteTaskObj = () => {
  // find the matching task in task array and remove from array then add it to trash array
  for (let i = 0; i < tasksArr.length; i += 1) {
    if (tasksArr[i].title === cardValue.value) {
      const index = tasksArr.indexOf(tasksArr[i]);
      trashArr.push(tasksArr[i]);
      tasksArr.splice(index, 1);
    }
  }
};

// restore task object back to the task array
// **** need restore button
const restoreTaskObj = () => {
  //
};

const permDeleteTask = () => {
  //
};

// **** logic to create deleted object card, different from appendTask
const appendDeletedTask = (task) => {
  const taskList = document.getElementById('task-list');
  const taskCard = document.createElement('div');
  taskCard.setAttribute('class', 'task-card');
  taskList.prepend(taskCard);

  // display project of task for home buttons
  createAndAppend('div', 'card-project', null, task.project, taskCard);

  // container for middle contents of task card
  const middleCont = createAndAppend(
    'div',
    'midline-card',
    null,
    null,
    taskCard,
  );

  // empty div in place of checkbox
  createAndAppend('div', null, null, null, middleCont);

  // display title of task
  createAndAppend('div', 'card-title', null, task.title, middleCont);

  // display due date of task
  const dateLine = createAndAppend(
    'div',
    'card-date',
    null,
    task.taskInfo.dueDate,
    middleCont,
  );
  if (task.taskInfo.dueDate === '') {
    dateLine.textContent = 'No due date';
  }

  addBorderStyle(task.taskInfo.priority, taskCard);

  // permanently delete task button
  createAndAppend('button', 'perm-delete-btn', null, 'delete', middleCont);
  // restore task button
  createAndAppend('button', 'restore-btn', null, 'restore', middleCont);

  // empty bottom container of task card
  createAndAppend('div', null, null, null, taskCard);
};

const loadDeletedTasks = () => {
  for (let i = 0; i < trashArr.length; i += 1) {
    appendDeletedTask(trashArr[i]);
  }
};

// event listeners for delete-related buttons
const eventListeners = () => {
  const mainBody = document.getElementById('main-body');

  // event listener for delete button
  mainBody.addEventListener('click', (e) => {
    deleteTaskEl(e.target);
    deleteTaskObj();
  });
};

// event listener for restore button

export {
  trashArr,
  deleteTaskEl,
  deleteTaskObj,
  restoreTaskObj,
  eventListeners,
  loadDeletedTasks,
};
