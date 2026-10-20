const newTaskInput = document.getElementById("newtask-input");
const addBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");
const allFilterBtn = document.getElementById("all-filter");
const activeFilterBtn = document.getElementById("active-filter");
const compFilterBtn = document.getElementById("comp-filter");
const compStat = document.getElementById("completed-task-stat");
const allStat = document.getElementById("all-task-stat");
const activeStat = document.getElementById("active-task-stat");
const inputError = document.getElementById("input-error");
const taskPriority = document.getElementById("task-priority");
const searchInput = document.getElementById("search-input");

let selectedFilter = "all";

let totalTasks = 0;
let completedTasks = 0;
let activeTasks = 0;

let tasks = JSON.parse(localStorage.getItem("savedTasks")) || [];
showTasks();

addBtn.addEventListener("click", addTask);
newTaskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

searchInput.addEventListener("input", showTasks);

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

  const searchTerm = searchInput.value.trim().toLowerCase();

  filteredTasks = filteredTasks.filter((filteredTask) => {
    return filteredTask.taskText.toLowerCase().includes(searchTerm);
  });

  filteredTasks.forEach((task) => {
    let hTaskLi = document.createElement("li");
    let taskP = document.createElement("p");
    let deleteBtn = document.createElement("button");
    let checkBox = document.createElement("input");
    let editBtn = document.createElement("button");
    let priorityP = document.createElement("span");

    priorityP.textContent = task.priority;
    priorityP.classList.add(`priority-${task.priority || "medium"}`);

    taskP.textContent = task.taskText;
    editBtn.textContent = "Edit";
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", () => {
      tasks = tasks.filter((elem) => elem.id !== task.id);
      saveTasks();
      showTasks();
    });

    editBtn.addEventListener("click", () => {
      const editInput = document.createElement("input");
      const saveBtn = document.createElement("button");
      const cancelBtn = document.createElement("button");

      saveBtn.textContent = "Save";
      cancelBtn.textContent = "Cancel";

      function saveUpdate() {
        const updatedTask = editInput.value.trim();
        if (updatedTask !== "") {
          task.taskText = updatedTask;
          saveTasks();
          showTasks();
        }
      }

      saveBtn.addEventListener("click", () => {
        saveUpdate();
      });
      cancelBtn.addEventListener("click", () => {
        showTasks();
      });

      editInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          saveUpdate();
        } else if (e.key === "Escape") {
          showTasks();
        }
      });

      editInput.type = "text";
      editInput.value = task.taskText;
      hTaskLi.innerHTML = "";
      hTaskLi.appendChild(editInput);
      hTaskLi.appendChild(saveBtn);
      hTaskLi.appendChild(cancelBtn);
      editInput.focus();
    });

    checkBox.type = "checkbox";
    checkBox.checked = task.comp;
    hTaskLi.appendChild(checkBox);
    hTaskLi.appendChild(taskP);
    hTaskLi.appendChild(priorityP);
    hTaskLi.appendChild(editBtn);
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
  allStat.textContent = tasks.length;
  compStat.textContent = tasks.filter((task) => task.comp).length;
  activeStat.textContent = tasks.filter((task) => !task.comp).length;
}

function addTask() {
  const task = newTaskInput.value.trim();
  if (task.length !== 0) {
    inputError.textContent = "";
    tasks.push({
      id: crypto.randomUUID(),
      taskText: task,
      comp: false,
      priority: taskPriority.value,
    });
    saveTasks();
    newTaskInput.value = "";
    showTasks();
  } else {
    inputError.textContent = "Please enter a task";
  }
}
