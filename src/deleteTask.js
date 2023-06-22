import {
  createAndAppend,
  tasksArr,
  trashArr,
  addPriority,
  updateStorage,
} from './toExport';

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
      // push task to trash
      trashArr.push(tasksArr[i]);
      // remove task from task array
      tasksArr.splice(index, 1);

      // update storage for both trash and tasks arrays
      updateStorage('trash');
      updateStorage('tasks');
    }
  }
};

// remove task object from trash array
const removeTaskObj = (restore) => {
  for (let i = 0; i < trashArr.length; i += 1) {
    // find the task obj by matching it for previously stored card value
    if (trashArr[i].title === cardValue.value) {
      const index = trashArr.indexOf(trashArr[i]);

      // restore to task array and update task storage
      if (restore === 'restore') {
        tasksArr.push(trashArr[i]);
        updateStorage('tasks');
      }

      // remove from trash array
      trashArr.splice(index, 1);
      // update trash storage
      updateStorage('trash');
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

  // display project of task
  createAndAppend('div', 'card-project', null, task.project, taskCard);

  // container for middle contents of task card
  const middleCont = createAndAppend(
    'div',
    'midline-card',
    null,
    null,
    taskCard,
  );

  // container for left column of task card
  const cardLeftCol = createAndAppend(
    'div',
    'card-left-column',
    null,
    null,
    middleCont,
  );

  // empty div in place of checkbox
  createAndAppend('div', null, null, null, cardLeftCol);

  // display title of task
  createAndAppend('div', 'card-title', null, task.title, cardLeftCol);

  // container for right column of task card
  const cardRightCol = createAndAppend(
    'div',
    'card-right-column',
    null,
    null,
    middleCont,
  );

  // container for priority level
  const cardPri = createAndAppend(
    'div',
    'card-priority',
    null,
    null,
    cardRightCol,
  );
  addPriority(task.taskInfo.priority, cardPri);

  // display due date of task
  const dateLine = createAndAppend(
    'div',
    'card-date',
    null,
    task.taskInfo.dueDate,
    cardRightCol,
  );
  if (task.taskInfo.dueDate === '') {
    dateLine.textContent = 'No due date';
  }

  // restore task button
  const restoreBtn = createAndAppend(
    'button',
    'restore-btn card-btns',
    null,
    'restore',
    cardRightCol,
  );
  restoreBtn.innerHTML =
    '<svg width="25px" height="25px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" ><path d="M0 0h48v48H0z" fill="none"/><g id="Shopicon"><path d="M10,22v2c0,7.72,6.28,14,14,14s14-6.28,14-14s-6.28-14-14-14h-4V4l-8,8l8,8v-6h4c5.514,0,10,4.486,10,10s-4.486,10-10,10s-10-4.486-10-10v-2H10z"/></g></svg>';

  // permanently delete task button
  const permDel = createAndAppend(
    'button',
    'perm-delete-btn card-btns',
    null,
    'delete',
    cardRightCol,
  );
  permDel.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="25px" height="25px" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"/></svg>';

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
  document.addEventListener('click', (e) => {
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
