import todo from "./todo";
import project from "./project";
import projectTodosDOM from "./DOMDrawer";
//Standard todo



const defaultTodo1 = todo("Brush Te23eth","Teeth needs to be brushed","DueDate", 1);
const defaultTodo2 = todo("Shower","Good shower every day","DueDate", 2);

const defaultProject = project("Default Project");
defaultProject.projectTodos[0] = defaultTodo1;
defaultProject.projectTodos[1] = defaultTodo2;


projectTodosDOM(defaultProject);
