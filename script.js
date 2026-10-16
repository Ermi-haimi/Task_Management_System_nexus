const newTaskInput = document.getElementById("newtask-input");
const addBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

let tasks = [];

addBtn.addEventListener("click", () => {
  const task = newTaskInput.value.trim();
  if (task !== "") {
    tasks.push({ taskText: task, comp: false });
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
      let updated = tasks.filter((elem) => {
        return elem !== task;
      });
      tasks = updated;
      showTasks();
    });

    hTaskLi.appendChild(taskP);
    hTaskLi.appendChild(deleteBtn);
    taskP.classList.toggle("completed", task.comp);
    taskP.addEventListener("click", () => {
      task.comp = !task.comp;
      taskP.classList.toggle("completed", task.comp);
    });
    taskList.append(hTaskLi);
  });
}
