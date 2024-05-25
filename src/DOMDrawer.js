export default function projectTodosDOM(project){
    console.log(project.projectTodos[0]);
    // project.forEach((element), function() {
    //     listItem(element);
    // });

    for (let i = 0; i<project.projectTodos.length;i++){
        listItem(project.projectTodos[i]);
    }
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