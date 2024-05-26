import project from "./project";
export let activeProject;


export default function projectTodosDOM(project){
    for (let i = 0; i<project.projectTodos.length;i++){
        listItem(project.projectTodos[i]);
    }
}
export function projectName(projectName, projectID) {
    const nav = document.querySelector("#nav");
    const projectBtn = document.createElement("button");
    projectBtn.textContent = projectName;
    nav.append(projectBtn);

    projectBtn.addEventListener("click", () => {
        console.log(`${projectName} with ${projectID}` );
        activeProject = projectID;
        return projectID;
    });//Add eventlistener to newly created button. Fires content every time button is clicked
}

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