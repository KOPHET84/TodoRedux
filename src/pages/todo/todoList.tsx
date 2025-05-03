import { setTasksFrom, Todos } from "../../features/todo/todoSLice";
import { AppDispatch } from "../../app/store";
import { useAppSelector, useAppDispatch } from "../../app/reduxHooks";
import { useEffect } from "react";
import { loadFromLocalStorage } from "../../app/utils";
import { TodoTable } from "./todoTable/todoTable";
import { TodoInput } from "./todoInput/todoInput";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme, StyledBox, StyledTypography } from "./todoList.style";

export const TodoList = () => {
  const todos = useAppSelector((state) => state.todo);
  const dispatch: AppDispatch = useAppDispatch();

  const saveToLocalStorage = (state: Todos) => {
    localStorage.setItem("todoState", JSON.stringify(state));
  };

  useEffect(() => {
    const savedTodos: Todos = loadFromLocalStorage();
    if (savedTodos.todos.length > 0) {
      dispatch(setTasksFrom(savedTodos));
    }
  }, []);

  useEffect(() => {
    saveToLocalStorage(todos);
  }, [todos]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StyledBox>
        <TodoInput dispatch={dispatch} />
        <StyledTypography>Table todo</StyledTypography>
        <TodoTable dispatch={dispatch} />
      </StyledBox>
    </ThemeProvider>
  );
};
