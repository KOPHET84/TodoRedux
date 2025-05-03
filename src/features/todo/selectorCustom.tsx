import { createSelector } from "reselect";
import { RootState } from "../../app/store";

const selectTodos = (state: RootState) => state.todo.todos;

export const selectFilteredTodos = createSelector(
  [selectTodos, (state: RootState) => state.todo.filterStatus],
  (todos, filterStatus) => {
    if (filterStatus === "") return todos;
    else if (filterStatus === "completed") {
      return todos.filter((el) => el.completed === true);
    } else {
      return todos.filter((el) => el.completed === false);
    }
  }
);

export const selectSortedTodos = createSelector(
  [selectFilteredTodos, (state: RootState) => state.todo.sortDate],
  (todos, sortDate) => {
    const newTodos = [...todos];
    newTodos.sort((a, b) => {
      if (sortDate === "asc") {
        return Number(b.createdAt) - Number(a.createdAt);
      }
      return Number(a.createdAt) - Number(b.createdAt);
    });
    return newTodos;
  }
);

export const selectPagedTodos = createSelector(
  [
    selectSortedTodos,
    (state: RootState) => state.todo.currentPage,
    (state: RootState) => state.todo.pageSize,
  ],
  (todos, currentPage, pageSize) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const newTodos = [...todos];
    return newTodos.slice(startIndex, endIndex);
  }
);
