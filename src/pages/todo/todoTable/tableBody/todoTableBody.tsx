import {
  deleteTask,
  toggleTask,
  setCurrentPage,
  Todo,
} from "../../../../features/todo/todoSLice";
import { AppDispatch } from "../../../../app/store";
import { useAppSelector, useAppDispatch } from "../../../../app/reduxHooks";
import { TableBody, Button, Checkbox } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { selectPagedTodos } from "../../../../features/todo/selectorCustom";
import { StyledTableRow } from "./tableBody.style";
import { StyledTableCell } from "../todoTable.style";
export const TodoTableBody = ({
  handleEditTaskClick,
}: {
  handleEditTaskClick: (task: Todo) => void;
}) => {
  const todos = useAppSelector((state) => state.todo);
  const dispatch: AppDispatch = useAppDispatch();
  const pagedTodos = useAppSelector(selectPagedTodos);

  const handleChangePages = (value: number) => {
    dispatch(setCurrentPage(value));
  };
  const handleDeleteTask = (id: string) => {
    dispatch(deleteTask(id));
    if (pagedTodos.length - 1 === 0 && todos.currentPage > 1) {
      handleChangePages(todos.currentPage - 1);
    }
  };
  const handleToggleTask = (id: string) => {
    dispatch(toggleTask(id));
    if (
      pagedTodos.length - 1 === 0 &&
      todos.currentPage > 1 &&
      todos.filterStatus !== ""
    ) {
      handleChangePages(todos.currentPage - 1);
    }
  };

  return (
    <TableBody>
      {pagedTodos.map((todo) => (
        <StyledTableRow key={todo.id} onClick={() => handleEditTaskClick(todo)}>
          <StyledTableCell>
            <Checkbox
              checked={todo.completed}
              color="primary"
              onClick={(e) => e.stopPropagation()}
              onChange={() => {
                handleToggleTask(todo.id);
              }}
            />
            {todo.title.length > 10
              ? todo.title.slice(0, 10) + "..."
              : todo.title}
          </StyledTableCell>
          <StyledTableCell>
            {new Date(Number(todo.createdAt)).toLocaleString("en-GB")}
          </StyledTableCell>
          <StyledTableCell>
            {todo.completed ? "completed" : "not completed"}
          </StyledTableCell>
          <StyledTableCell>
            <Button
              color="inherit"
              onClick={(e) => {
                e.stopPropagation();
                handleDeleteTask(todo.id);
              }}
            >
              <DeleteIcon />
            </Button>
          </StyledTableCell>
        </StyledTableRow>
      ))}
    </TableBody>
  );
};
