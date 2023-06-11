import './styles.css';
import { pageload } from './pageload';
import { projectEventListeners, exampleProject } from './projects';
import { navEventListeners } from './navBar';
import { completeEventListener } from './completeTask';
import { deleteEventListeners } from './deleteTask';
import { createEventListener } from './createTask';
import { editEventListeners } from './editTask';

// **** CURRENT TO-DO:

// 1 ----> may need to add priority default to 'low' or add a 'none' option

pageload();
exampleProject();
projectEventListeners();
navEventListeners();
completeEventListener();
deleteEventListeners();
createEventListener();
editEventListeners();

/*

Remember SOLID principles!!
-Single responsibility principle
-Open/closed principle
-Liskov substitution principle
-Interface segregation principle
-Dependency inversion principle

*/
