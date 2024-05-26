import { projectName } from "./DOMDrawer";
let ID = 0;
export let projectArray = [];


export function project(name){
    const projectID = ID;
    ID++;
    projectName(name, projectID); //Create button to represent project
    let projectTodos = [];


    const getProjectName = () => name;
    const getProjectTodos = () => projectTodos;
    const getProjectID = () => projectID;
    
    return{
        projectTodos,
        getProjectName,
        getProjectTodos,
        getProjectID,
    }
}