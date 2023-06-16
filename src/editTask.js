import { parseISO, format, parse } from 'date-fns';
import { pageInfo, tasksArr, addBorderStyle } from './toExport';

// open/close edit task popup
const toggleEdit = () => {
  const popupCont = document.getElementById('edit-popup');
  if (popupCont.style.display === 'block') {
    popupCont.style.display = 'none';
  } else if (popupCont.style.display === 'none') {
    popupCont.style.display = 'block';
  }
};

// populate edit popup with clicked task's information to edit
const populateEdit = (task) => {
  const editTitle = document.getElementById('edit-title');
  const editDesc = document.getElementById('edit-desc');
  const editDate = document.getElementById('edit-date');
  const editPri = document.getElementById('edit-priority');
  // task title
  editTitle.value = task.title;

  // task description
  editDesc.value = task.taskInfo.description;

  // task due date
  if (task.taskInfo.dueDate !== '') {
    const formattedDate = parse(
      task.taskInfo.dueDate,
      'MM/dd/yyyy',
      new Date(),
    );
    const formatted2 = format(formattedDate, 'yyyy-MM-dd');
    editDate.value = formatted2;
  } else {
    editDate.value = '';
  }

  // task priority
  editPri.value = task.taskInfo.priority;
};

// update currently selected task object following save edit
const updateTaskObj = (task) => {
  const editTitle = document.getElementById('edit-title');
  const editDesc = document.getElementById('edit-desc');
  const editDate = document.getElementById('edit-date');
  const editPri = document.getElementById('edit-priority');

  task.title = editTitle.value;
  task.taskInfo.description = editDesc.value;

  // update date with new format
  if (editDate.value !== '') {
    const parseDate = parseISO(editDate.value);
    const formattedDate = format(parseDate, 'MM/dd/yyyy');
    task.taskInfo.dueDate = formattedDate;
    task.taskInfo.unformattedDate = editDate.value;
  } else {
    task.taskInfo.dueDate = '';
  }
  task.taskInfo.priority = editPri.value;
};

// update currently selected task element following save edit
const updateTaskEl = (task, index) => {
  const cardTitle = document.getElementsByClassName('card-title');
  const cardDate = document.getElementsByClassName('card-date');
  const taskCard = document.getElementsByClassName('task-card');

  // update title
  Array.from(cardTitle)[index].textContent = task.title;

  // update due date
  if (task.taskInfo.dueDate !== '') {
    Array.from(cardDate)[index].textContent = task.taskInfo.dueDate;
  } else {
    Array.from(cardDate)[index].textContent = 'No due date';
  }

  // update border style based on priority
  addBorderStyle(task.taskInfo.priority, Array.from(taskCard)[index]);
};

// when edit btn clicked, invokes all steps involved for opening the edit pop up
const openEditScreen = (element) => {
  const editBtn = document.getElementsByClassName('edit-btn');
  const editArr = Array.from(editBtn);
  const cardTitle = document.getElementsByClassName('card-title');
  const cardTitleArr = Array.from(cardTitle);

  // loop through array of edit btns to identify the element index clicked
  for (let i = 0; i < editArr.length; i += 1) {
    // first, match the clicked edit button to its index
    if (element === editArr[i]) {
      // find title of task by matching for the same index
      const currentTitle = cardTitleArr[i].textContent;

      // set the element selected based on its index
      pageInfo.currentElement = i;

      // use title of task to find it within the task array
      for (let l = 0; l < tasksArr.length; l += 1) {
        if (tasksArr[l].title === currentTitle) {
          // update current task selected
          pageInfo.currentTask = tasksArr[l];
          toggleEdit();
          populateEdit(tasksArr[l]);
        }
      }
    }
  }
};

const saveEdits = () => {
  // find current task
  for (let i = 0; i < tasksArr.length; i += 1) {
    if (tasksArr[i] === pageInfo.currentTask) {
      // update the task object and its DOM elements
      updateTaskObj(tasksArr[i]);
      updateTaskEl(tasksArr[i], pageInfo.currentElement);
    }
  }
};

const editEventListeners = () => {
  const mainBody = document.getElementById('main-body');

  mainBody.addEventListener('click', (e) => {
    // EDIT TASK BTN
    // open edit task card with current task card clicked
    if (e.target.classList.contains('edit-btn')) {
      openEditScreen(e.target);
    }

    // CANCEL OR SAVE BTN
    // close edit popup when 'save' or 'cancel' is clicked
    if (
      e.target.getAttribute('id') === 'cancel-edit-btn' ||
      e.target.getAttribute('id') === 'save-task-btn'
    ) {
      toggleEdit();
    }

    // SAVE BTN
    // event listener for 'save' button when editing todo card
    if (e.target.getAttribute('id') === 'save-task-btn') {
      saveEdits();
    }
  });
};

export { editEventListeners };
