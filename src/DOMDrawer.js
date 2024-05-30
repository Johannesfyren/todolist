import project from "./project";
export let activeProject = 0;

const listContainer = document.querySelector("#listContainer");
export default function projectTodosDOM(project){
    listContainer.innerHTML = '';
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


// export function drawProjectTodos(project){
//     project.map((element) => {
//         listItem(element);
//     });
// }


function listItem (obj){
    
    
    
    const listItems = document.createElement("li");
    listContainer.append(listItems);
    const head = document.createElement("h1");
    const desc = document.createElement("p");
    const duedate = document.createElement("p");
    head.textContent = obj.getTitle();
    desc.textContent = obj.getDescription();
    duedate.textContent = obj.getDueDate();
    listItems.append(head);
    listItems.append(desc);
    listItems.append(duedate);
}