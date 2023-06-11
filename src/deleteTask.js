import { createAndAppend, tasksArr, addBorderStyle } from './toExport';

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

// remove task object from trash array
const removeTaskObj = (restore) => {
  for (let i = 0; i < trashArr.length; i += 1) {
    // find the task obj by matching it for previously stored card value
    if (trashArr[i].title === cardValue.value) {
      const index = trashArr.indexOf(trashArr[i]);
      // restore to task array if called to restore
      if (restore === 'restore') {
        tasksArr.push(trashArr[i]);
      }
      // remove from trash array
      trashArr.splice(index, 1);
    }
  }
};

// remove task card for either perm delete or for restoring
const removeTaskEl = (arg) => {
  const taskCard = document.getElementsByClassName('task-card');
  const cardArr = Array.from(taskCard);
  const cardTitle = document.getElementsByClassName('card-title');
  const cardTitleArr = Array.from(cardTitle);
  const restoreBtns = document.getElementsByClassName('restore-btn');
  const restoreArr = Array.from(restoreBtns);
  const permDeleteBtn = document.getElementsByClassName('perm-delete-btn');
  const permDeleteArr = Array.from(permDeleteBtn);

  // find the task card element to be removed by matching for its index
  for (let i = 0; i < restoreArr.length; i += 1) {
    if (arg === restoreArr[i]) {
      // store the title of the task in an obj to be used for restoring obj fn
      cardValue.value = cardTitleArr[i].textContent;
      cardArr[i].remove();
      removeTaskObj('restore');
    } else if (arg === permDeleteArr[i]) {
      cardValue.value = cardTitleArr[i].textContent;
      cardArr[i].remove();
      removeTaskObj();
    }
  }
};

// append deleted tasks
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

// appends all deleted tasks to Trash page
const loadDeletedTasks = () => {
  for (let i = 0; i < trashArr.length; i += 1) {
    appendDeletedTask(trashArr[i]);
  }
};

// event listeners for delete-related buttons
const deleteEventListeners = () => {
  const mainBody = document.getElementById('main-body');

  mainBody.addEventListener('click', (e) => {
    // if delete button clicked
    if (e.target.classList.contains('delete-btn')) {
      deleteTaskEl(e.target);
      deleteTaskObj();
    }

    // if restore or perm delete button clicked
    if (
      e.target.classList.contains('restore-btn') ||
      e.target.classList.contains('perm-delete-btn')
    ) {
      removeTaskEl(e.target);
    }
  });
};

// event listener for restore button

export { deleteEventListeners, loadDeletedTasks };
