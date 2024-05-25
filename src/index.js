import todo from "./todo";
import project from "./project";
//Standard todo
const defaultTodo1 = todo("Brush Teeth","Teeth needs to be brushed","DueDate", 1);
const defaultTodo2 = todo("Shower","Good shower every day","DueDate", 2);

const defaultProject = project("Default Project");
defaultProject.projectTodos[0] = defaultTodo1;
defaultProject.projectTodos[1] = defaultTodo2;

