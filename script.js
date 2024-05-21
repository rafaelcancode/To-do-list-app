const inputEl = document.querySelector(".inputField");
const taskField = document.querySelector(".taskfield");

function addTask() {
  // Get the input value
  const taskText = inputEl.value;

  if (taskText.trim() === "") {

    inputEl.placeholder = "Enter a task here!";
    return;
  }

  // Create a container for the task and buttons
  const taskContainer = document.createElement("div");
  taskContainer.classList.add("taskContainer");

  // Create a new paragraph element
  const newTask = document.createElement("p");
  newTask.textContent = taskText;

  // Create edit button
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.classList.add("editButton");

  // Create delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("deleteButton");

  // Append the task, edit button, and delete button to the container
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
    // Make the task text editable
    newTask.contentEditable = true;
    newTask.focus(); // Focus on the task text for editing
    // Remove the edit button
    editButton.style.display = "none";
    // Add event listener to handle finishing editing
    newTask.addEventListener("blur", () => {
      // Make the task text non-editable
      newTask.contentEditable = false;
      // Show the edit button again
      editButton.style.display = "inline-block";
    });
  });
}

// Add keydown event listener to input field
inputEl.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});
