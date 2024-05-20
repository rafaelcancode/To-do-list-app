const inputEl = document.querySelector(".inputField");
const taskField = document.querySelector(".taskfield");

function addTask() {
    // Get the input value
    const taskText = inputEl.value;
    
    // Create a new paragraph element
    const newTask = document.createElement("p");
    
    // Set the text content of the paragraph to the task text
    newTask.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("deleteButton");
    
    // Create edit button
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("editButton");
    
    // Append the new paragraph to the task field
    taskField.appendChild(newTask);
}
