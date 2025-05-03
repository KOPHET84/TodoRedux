import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Todo = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
};
export interface Todos {
  todos: Todo[];
  sortDate: string;
  filterStatus: string;
  currentPage: number;
  pageSize: number;
}
const initialState: Todos = {
  todos: [],
  sortDate: "asc",
  filterStatus: "",
  currentPage: 1,
  pageSize: 5,
};

export const todoSLice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      const newTask: Todo = {
        id: String(Date.now()),
        title: action.payload,
        completed: false,
        createdAt: Date.now().toString(),
      };
      state.todos.push(newTask);
    },
    editTask: (state, action: PayloadAction<{ id: string; title: string }>) => {
      const task = state.todos.find((task) => task.id === action.payload.id);
      if (task) task.title = action.payload.title;
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleTask: (state, action: PayloadAction<string>) => {
      const task = state.todos.find((task) => task.id === action.payload);
      if (task) task.completed = !task.completed;
    },
    sortTasks: (state, action: PayloadAction<string>) => {
      state.sortDate = action.payload;
    },
    filterTasks: (state, action: PayloadAction<string>) => {
      state.filterStatus = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setTasksFrom: (state, action: PayloadAction<Todos>) => {
      if (state.todos.length === 0) {
        state.todos = [...action.payload.todos];
      }
    },
  },
});

export const {
  addTask,
  editTask,
  deleteTask,
  toggleTask,
  sortTasks,
  filterTasks,
  setCurrentPage,
  setTasksFrom,
} = todoSLice.actions;
