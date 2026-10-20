const newTaskInput = document.getElementById("newtask-input");
const addBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");
const allFilterBtn = document.getElementById("all-filter");
const activeFilterBtn = document.getElementById("active-filter");
const compFilterBtn = document.getElementById("comp-filter");
const compStat = document.getElementById("completed-task-stat");
const allStat = document.getElementById("all-task-stat");
const activeStat = document.getElementById("active-task-stat");

let selectedFilter = "all";

let totalTasks = 0;
let completedTasks = 0;
let activeTasks = 0;

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
  statKeeper();

  let filteredTasks;

  if (selectedFilter === "active") {
    filteredTasks = tasks.filter((task) => {
      return task.comp === false;
    });
  } else if (selectedFilter === "completed") {
    filteredTasks = tasks.filter((task) => {
      return task.comp === true;
    });
  } else {
    filteredTasks = tasks;
  }

  filteredTasks.forEach((task) => {
    let hTaskLi = document.createElement("li");
    let taskP = document.createElement("p");
    let deleteBtn = document.createElement("button");
    let checkBox = document.createElement("input");
    taskP.textContent = task.taskText;
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      tasks = tasks.filter((elem) => elem !== task);
      saveTasks();
      showTasks();
    });

    checkBox.type = "checkbox";
    checkBox.checked = task.comp;
    hTaskLi.appendChild(checkBox);
    hTaskLi.appendChild(taskP);
    hTaskLi.appendChild(deleteBtn);
    taskP.classList.toggle("completed", task.comp);
    checkBox.addEventListener("change", () => {
      task.comp = !task.comp;
      saveTasks();
      showTasks();
    });
    taskList.append(hTaskLi);
  });
}

function saveTasks() {
  localStorage.setItem("savedTasks", JSON.stringify(tasks));
}

activeFilterBtn.addEventListener("click", () => {
  activeFilterBtn.classList.add("selected");
  allFilterBtn.classList.remove("selected");
  compFilterBtn.classList.remove("selected");
  selectedFilter = "active";
  showTasks();
});
compFilterBtn.addEventListener("click", () => {
  compFilterBtn.classList.add("selected");
  allFilterBtn.classList.remove("selected");
  activeFilterBtn.classList.remove("selected");
  selectedFilter = "completed";
  showTasks();
});

allFilterBtn.addEventListener("click", () => {
  allFilterBtn.classList.add("selected");
  compFilterBtn.classList.remove("selected");
  activeFilterBtn.classList.remove("selected");

  selectedFilter = "all";
  showTasks();
});

function statKeeper() {
  let tot = tasks.length;
  completedTasks = 0;
  activeTasks = 0;
  for (let i = 0; i < tot; i++) {
    if (tasks[i].comp) {
      completedTasks += 1;
    } else {
      activeTasks += 1;
    }
  }
  totalTasks = tot;

  allStat.textContent = totalTasks;
  compStat.textContent = completedTasks;
  activeStat.textContent = activeTasks;
}
