import todo from "./todo";
import { project, projectArray} from "./project";
import projectTodosDOM from "./DOMDrawer";
import { projectName } from "./DOMDrawer";
import { activeProject } from "./DOMDrawer";
//deafualt todo start

const defaultTodo1 = todo("Brush Te23eth","Teeth needs to be brushed","DueDate", 1);
const defaultTodo2 = todo("Shower","Good shower every day","DueDate", 2);


const defaultProject = project("Default Project");
console.log(defaultProject);
projectArray.push(defaultProject);
defaultProject.projectTodos[0] = defaultTodo1;
defaultProject.projectTodos[1] = defaultTodo2;
projectTodosDOM(defaultProject);

//Default todo end
const newProjectBtn = document.querySelector("#new-project");
const newTodoBtn = document.querySelector("#new-todo");



newProjectBtn.addEventListener("click", function(){
    let name = prompt("name");
    let projectIzz = project(name);
    projectArray.push(projectIzz);
    console.log(`active project is ${activeProject}`);
});

newTodoBtn.addEventListener("click", function(){
    let chosenProject = projectArray.filter((project) => project.getProjectID() == activeProject); //Find det object der svarer til aktiv project id!
    let toDoName = prompt("name");
    let toDoDueDate = prompt("date");
    let toDoDesc = prompt("desc");
    let toDoPriority = prompt("priority");
    chosenProject[0].projectTodos.push(todo(toDoName, toDoDesc, toDoDueDate, toDoPriority));
    console.log(chosenProject[0]);
    projectTodosDOM(chosenProject[0]);
    
});







function createNewProject(){
    let name = prompt("name");
    let projectIzz = project(name);
    projectArray.push(projectIzz);
    projectIzz.projectTodos[1] = defaultTodo2;
}



