import todo from "./todo";
import { project, projectArray} from "./project";
import projectTodosDOM from "./DOMDrawer";
import { projectName } from "./DOMDrawer";
import { activeProject, drawProjectTodos} from "./DOMDrawer";
import "./style.css";
import * as css from "./style.css";


//deafualt todo start
const defaultTodo1 = todo("Brush Te23eth","Teeth needs to be brushed","DueDate", 1);
const defaultTodo2 = todo("Shower","Good shower every day","DueDate", 2);

const defaultProject = project("Default Project");
console.log(defaultProject);
projectArray.push(defaultProject);
defaultProject.projectTodos[0] = defaultTodo1;
defaultProject.projectTodos[1] = defaultTodo2;
//projectTodosDOM(defaultProject);
//Default todo end


const newProjectBtn = document.querySelector("#new-project");
const newTodoBtn = document.querySelector("#new-todo");

newProjectBtn.addEventListener("click", function(){
    let tmpName = prompt("name");
    let tmpProject = project(tmpName);
    projectArray.push(tmpProject);
    
});

newTodoBtn.addEventListener("click", function(){
    let chosenProject = projectArray.filter((project) => project.getProjectID() == activeProject); //Find det object der svarer til aktiv project id!
    let tmpToDoName = prompt("name");
    let tmpToDoDueDate = prompt("date");
    let tmpToDoDesc = prompt("desc");
    let tmpToDoPriority = prompt("priority");
    chosenProject[0].projectTodos.push(todo(tmpToDoName, tmpToDoDesc, tmpToDoDueDate, tmpToDoPriority));
    console.log(chosenProject[0]);
    projectTodosDOM(chosenProject[0]);
});

addEventListener("click", (event)=>{
    let chosenProject = projectArray.filter((project) => project.getProjectID() == activeProject);
    projectTodosDOM(chosenProject[0])
    console.log(`IM FINDING AN ACTIVE PORJECT ${activeProject}`);
});










