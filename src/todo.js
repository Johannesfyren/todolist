export default function todo (title, description, dueDate, priority) {
    


    const getTitle = () => title;
    const getDescription = () => description;
    const getDueDate = () => dueDate;


    return{
        priority,
        dueDate,
        getDueDate,
        getDescription,
        getTitle
    }
}