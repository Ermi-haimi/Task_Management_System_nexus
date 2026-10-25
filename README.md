# Task Manager

A simple task management web application built with HTML, CSS, and JavaScript. It allows users to create, organize, and manage tasks while tracking their progress through task status, priorities, search, and filtering.

## Features

- **Add Tasks:** Create tasks with a specified priority.
- **Edit Tasks:** Update existing task descriptions.
- **Delete Tasks:** Remove tasks you no longer need.
- **Task Completion:** Mark tasks as completed or active.
- **Task Priorities:** Assign priorities to tasks.
- **Task Filtering:** Filter tasks by all, active, or completed status.
- **Task Search:** Find tasks by searching their descriptions.
- **Task Statistics:** View the total number of tasks and the number of active and completed tasks.
- **Data Persistence:** Save tasks using browser Local Storage so they remain available after refreshing the page.
- **Input Validation:** Prevent empty tasks from being added.

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Browser Local Storage

## Project Structure

```text
task-manager/
├── index.html
├── style.css
├── script.js
└── README.md
```

- `index.html` — Defines the structure of the application.
- `style.css` — Handles the application's layout, styling, and appearance.
- `script.js` — Implements task management functionality, DOM manipulation, event handling, filtering, searching, and local storage.
- `README.md` — Documents the project, its features, and instructions for use.

## Getting Started

### Prerequisites

- A modern web browser.
- A code editor such as Visual Studio Code.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Ermi-haimi/Task_Management_System_nexus.git
   ```

2. Navigate to the project directory:

   ```bash
   cd task-manager
   ```

3. Open the project in Visual Studio Code.

4. Run `index.html` using a local development server, such as the Live Server extension.

## How to Use

1. Enter a task description in the input field.
2. Select a priority for the task.
3. Click the **Add Task** button or press Enter.
4. Use the checkbox to mark a task as completed or active.
5. Click **Edit** to update a task description.
6. Click **Delete** to remove a task.
7. Use the filter buttons to display all, active, or completed tasks.
8. Enter text in the search field to find specific tasks.
9. View the task statistics to monitor your progress.

## Data Persistence

The application uses the browser's `localStorage` to store tasks.

Tasks remain saved when the page is refreshed or the browser is reopened in the same browser profile. Since the application uses local storage, tasks are not automatically synchronized across different browsers or devices.

## Concepts Practiced

This project provides practical experience with:

- HTML structure and CSS styling.
- JavaScript functions and event listeners.
- DOM manipulation and dynamic element creation.
- Arrays and array methods, including `filter()`.
- Object manipulation.
- Input validation.
- Search and filtering functionality.
- Browser Local Storage.
- Updating the user interface dynamically.

## Future Improvements

- Add task deadlines and due dates.
- Implement sorting by priority.
- Add filtering by task priority.
- Improve keyboard accessibility.
- Add a confirmation dialog before deleting tasks.
- Enhance the responsive design for mobile devices.

## License

This project is available for personal and educational use.
