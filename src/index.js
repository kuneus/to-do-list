import './styles.css';
import { pageload } from './pageload';
import { projectEventListeners, exampleProject } from './projects';
import { navEventListeners } from './navBar';
import { completeEventListener } from './completeTask';
import { deleteEventListeners } from './deleteTask';
import { createEventListener } from './createTask';
import { editEventListeners } from './editTask';
import { deleteProjListener } from './deleteProject';
import { collapseListener, mediaQueryEventListener } from './collapseMenu';

// **** CURRENT TO-DO:

// 1 projects -----> create delete project button and functionality!

// 2 prevent duplicate submissions for projects and tasks

pageload();
exampleProject();
projectEventListeners();
navEventListeners();
completeEventListener();
deleteEventListeners();
createEventListener();
editEventListeners();
deleteProjListener();
collapseListener();
mediaQueryEventListener();

/*

Remember SOLID principles!!
-Single responsibility principle
-Open/closed principle
-Liskov substitution principle
-Interface segregation principle
-Dependency inversion principle

*/
