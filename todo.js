const addButton = document.getElementById("add-btn");
const taskList = document.querySelector(".task-list");
const completedList = document.querySelector(".completed-list");
const taskInput = document.getElementById("task-input");

function addTask() {
  const input = taskInput.value;
  if (input) {
    const taskItemContainer = document.createElement("div");
    taskItemContainer.classList.add("task-item");

    const taskText = document.createElement("p");
    taskText.textContent = input;

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");

    taskItemContainer.appendChild(taskText);
    taskItemContainer.appendChild(checkbox);
    taskList.appendChild(taskItemContainer);

    checkbox.addEventListener("click", function () {
      moveToCompleted(taskItemContainer);
    });

    taskInput.value = "";
  }
}

function moveToCompleted(taskItem) {
  taskItem.classList.remove("task-item");
  taskItem.classList.add("completed-item");

  const checkbox = taskItem.querySelector('input[type="checkbox"]');
  taskItem.removeChild(checkbox);

  completedList.appendChild(taskItem);

  taskList.removeChild(taskItem);
}

addButton.addEventListener("click", addTask);
