import { createAndAppend, tasksArr } from './index';

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

// restore the task back to its original state
const restoreTaskObj = () => {
  //
};

const restoreTaskEl = () => {
  //
};

// **** logic to create deleted object card, different from appendTask

const eventListeners = () => {
  const mainBody = document.getElementById('main-body');

  // event listener for delete button
  mainBody.addEventListener('click', (e) => {
    // const deleteBtns = document.getElementsByClassName('delete-btn');
    // const deleteArr = Array.from(deleteBtns);
    // const taskCard = document.getElementsByClassName('task-card');
    // const cardArr = Array.from(taskCard);
    // const cardTitle = document.getElementsByClassName('card-title');
    // const cardTitleArr = Array.from(cardTitle);
    // const cardValue = { value: '' };

    // if (e.target.classList.contains('delete-btn')) {
    //   // find the task card element to be deleted by matching for its index
    //   for (let i = 0; i < deleteArr.length; i += 1) {
    //     if (e.target === deleteArr[i]) {
    //       cardValue.value = cardTitleArr[i].textContent;
    //       cardArr[i].remove();
    //     }
    //   }

    //   // find the matching task in task array and remove from array then add it to trash array
    //   for (let i = 0; i < tasksArr.length; i += 1) {
    //     if (tasksArr[i].title === cardValue.value) {
    //       const index = tasksArr.indexOf(tasksArr[i]);
    //       trashArr.push(tasksArr[i]);
    //       tasksArr.splice(index, 1);
    //     }
    //   }
    // }
    deleteTaskEl(e.target);
    deleteTaskObj();
  });
};

// event listener for restore button

export {
  trashArr,
  deleteTaskEl,
  deleteTaskObj,
  restoreTaskEl,
  restoreTaskObj,
  eventListeners,
};
