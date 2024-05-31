let tasks = [];

function addTask() {
  const taskText = document.getElementById("taskInput").value;
  if (taskText) {
    tasks.push(taskText);
    document.getElementById("taskInput").value = "";
    updateTaskList();
  }
}

function updateTaskList() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  for (const task of tasks) {
    const listItem = document.createElement("li");
    listItem.innerText = task;
    taskList.appendChild(listItem);
  }
}