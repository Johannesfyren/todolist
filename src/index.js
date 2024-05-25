import todo from "./todo";
import project from "./project";
//Standard todo



const defaultTodo1 = todo("Brush Te23eth","Teeth needs to be brushed","DueDate", 1);
const defaultTodo2 = todo("Shower","Good shower every day","DueDate", 2);

const defaultProject = project("Default Project");
defaultProject.projectTodos[0] = defaultTodo1;
defaultProject.projectTodos[1] = defaultTodo2;



function listItem (obj){
    const listContainer = document.querySelector("#listContainer");
    const listItem = document.createElement("li");
    listContainer.append(listItem);
    const head = document.createElement("h1");
    const desc = document.createElement("p");
    const duedate = document.createElement("p");
    head.textContent = obj.getTitle();
    desc.textContent = obj.getDescription();
    duedate.textContent = obj.getDueDate();
    listItem.append(head);
    listItem.append(desc);
    listItem.append(duedate);
}

listItem(defaultTodo1);
listItem(defaultTodo2);
