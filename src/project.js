export default function project(name){
    let projectTodos = [];
    const getProjectName = () => name;
    const getProjectTodos = () => projectTodos;
    
    return{
        projectTodos,
    }
}