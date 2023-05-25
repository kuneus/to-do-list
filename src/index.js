import './styles.css';

const projCont = document.getElementById('projects-list');
const newProjectBtn = document.getElementById('new-project-btn');

function newProject() {
  const liEle = document.createElement('li');
  projCont.appendChild(liEle);
  const btn = document.createElement('button');
  btn.setAttribute('class', 'sb-btns projects');
  btn.textContent = 'example';
  liEle.appendChild(btn);
}

newProjectBtn.addEventListener('click', () => {
  newProject();
});

/*

Remember SOLID principles!!
-Single responsibility principle
-Open/closed principle
-Liskov substitution principle
-Interface segregation principle
-Dependency inversion principle

**** OUTLINE ****

MODULES:
-pageload
-today
-upcoming
-all tasks
-completed
-trash
-projects


FUNCTIONS, OBJ, & STUFF:
- newProject
    -> push to project array
- to-do factory fn / class
    -> title
    -> description
    -> due date
    -> priority
    -> completion status
    -> push to-do to taskArr
- changePage
    -> change page view to module clicked
- deleteTask
    -> remove from tasksArr and push to trashArr
- completeTask
    -> push to doneArr
- expandTask: display to-do information
- setPageStatus


-ARRAYS:
    -> tasksArr
    -> projectsArr
    -> trashArr
    -> doneArr



*/
