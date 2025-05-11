# Todo App

This is a To-Do List app built using Vite, React, TypeScript, and Redux Toolkit. It allows you to add, edit, sort tasks, and save them in localStorage. The tasks are displayed in a table format, making it easier to manage the to-do list.

### Live implementation on Github Pages: https://kophet84.github.io/TodoRedux
## Project Structure

- `src/`
  - `app/` — Contains the store, reduxHooks, and utilities.
    - `store.ts` — Redux Store configuration.
    - `reduxHooks.ts` — Custom hooks for working with Redux.
    - `utils.ts` — Helper functions.
  - `features/todo/` — Main logic for task management.
    - `todoSlice.ts` — Slice for managing tasks in Redux.
    - `selectorCustom.ts` — Custom selectors to access state data.
  - `pages/todo/` — Pages to display tasks.
    - `todo.const.tsx` — Main constants.
    - `todoList.tsx` — Task list.
    - `todoTable/`
        - `editTodo/`
            - `editTodo.tsx` — Task editing.
        - `tableBody/`
            - `todoTableBody.tsx` — Table body for TODO tasks.
        - `todoHead/`
            - `todoTableHead.tsx` — Table header.
        - `todoTable.tsx` — Task table display.
    - `todoInput/`
        - `todoInput.tsx` — Form to add and edit tasks.
  - `app.tsx` — Main app component.
  - `main.tsx` — Entry point.
  - `index.css` — App styles.

## Installation and Running

To run the project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/KOPHET84/TodoRedux
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the project:
   ```bash
   npm run dev
   ```

The project will be available at `http://localhost:5173/TodoRedux/`.

## Features

- **Adding tasks**: You can add a new task by entering text in the form.
- **Editing tasks**: Each task can be edited.
- **Sorting tasks**: Tasks can be sorted by date or status.
- **Saving in localStorage**: All data is saved in localStorage to maintain state after page reload.
- **Display in a table**: Tasks are displayed in a table with sorting options.

## Technologies Used

- **Vite** — A fast build tool for React applications.
- **React** — A library for building user interfaces.
- **TypeScript** — Strict typing for better development.
- **Redux Toolkit** — Convenient and efficient state management.
- **localStorage** — To store data on the client side.

**Authors**
---------

* KOPHET84

**License**
---------

* [License Information]

This README provides a general overview of the project. If you have any questions or need further assistance, feel free to ask!
