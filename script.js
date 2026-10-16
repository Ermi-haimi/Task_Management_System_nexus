const newTaskInput = document.getElementById("newtask-input");
const addBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");
const tasksContainer = document.querySelector(".tasks");

let tasks = [];

addBtn.addEventListener("click", () => {
  const task = newTaskInput.value.trim();
  if (task !== "") {
    tasks.push(task);
    newTaskInput.value = "";
    taskList.innerHTML = "";
    showTasks();
  }
});

function showTasks() {
  tasks.forEach((task) => {
    let hTask = document.createElement("li");
    hTask.textContent = task;
    taskList.append(hTask);
  });
}
