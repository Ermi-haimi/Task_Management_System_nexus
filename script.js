const newTaskInput = document.getElementById("newtask-input");
const addBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

let tasks = JSON.parse(localStorage.getItem("savedTasks")) || [];
showTasks();

addBtn.addEventListener("click", () => {
  const task = newTaskInput.value.trim();
  if (task !== "") {
    tasks.push({ taskText: task, comp: false });
    saveTasks();
    newTaskInput.value = "";
    showTasks();
  }
});

function showTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task) => {
    let hTaskLi = document.createElement("li");
    let taskP = document.createElement("p");
    let deleteBtn = document.createElement("button");
    taskP.textContent = task.taskText;
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      tasks = tasks.filter((elem) => elem !== task);
      saveTasks();
      showTasks();
    });

    hTaskLi.appendChild(taskP);
    hTaskLi.appendChild(deleteBtn);
    taskP.classList.toggle("completed", task.comp);
    taskP.addEventListener("click", () => {
      task.comp = !task.comp;
      taskP.classList.toggle("completed", task.comp);
      saveTasks();
    });
    taskList.append(hTaskLi);
  });
}

function saveTasks() {
  localStorage.setItem("savedTasks", JSON.stringify(tasks));
}
