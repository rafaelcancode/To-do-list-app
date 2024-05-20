const inputEl = document.querySelector(".inputField");
const taskField = document.querySelector(".taskfield");

function addTask() {
  // Get the input value
  const taskText = inputEl.value;

  if (taskText.trim() === "") {
    alert("Please enter a task.");
    return;
  }

  // Create a container for the task and buttons
  const taskContainer = document.createElement("div");
  taskContainer.classList.add("taskContainer");

  // Create a new paragraph element
  const newTask = document.createElement("p");
  newTask.textContent = taskText;

  // Create delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("deleteButton");

  // Create edit button
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.classList.add("editButton");

  // Append the task and buttons to the container
  taskContainer.appendChild(newTask);
  taskContainer.appendChild(editButton);
  taskContainer.appendChild(deleteButton);

  // Append the container to the task field
  taskField.appendChild(taskContainer);

  // Clear the input field
  inputEl.value = "";

  // Add event listener to delete button
  deleteButton.addEventListener("click", () => {
    taskField.removeChild(taskContainer);
  });

  // Add event listener to edit button
  editButton.addEventListener("click", () => {
    const editedTask = prompt("Edit your task:", taskText);
    if (editedTask !== null && editedTask.trim() !== "") {
      newTask.textContent = editedTask;
    }
  });
}

// Add keydown event listener to input field
inputEl.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});
