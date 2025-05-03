import { setCurrentPage, Todo } from "../../../features/todo/todoSLice";
import { AppDispatch } from "../../../app/store";
import { useAppSelector } from "../../../app/reduxHooks";
import { Stack, Pagination } from "@mui/material";
import { selectSortedTodos } from "../../../features/todo/selectorCustom";
import { useState } from "react";
import { EditTaskDialog } from "./editTodo/editTodo";
import { TodoTableHead } from "./tableHead/todoTableHead";
import { TodoTableBody } from "./tableBody/todoTableBody";
import { StyledTable, StyledTableContainer } from "./todoTable.style";

export const TodoTable = ({ dispatch }: { dispatch: AppDispatch }) => {
  const todos = useAppSelector((state) => state.todo);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Todo | null>(null);
  const sortedTodos = useAppSelector(selectSortedTodos);
  const handleChangePages = (value: number) => {
    dispatch(setCurrentPage(value));
  };
  const handleEditTaskClick = (task: Todo) => {
    setSelectedTask(task);
    setOpenEditDialog(true);
  };
  const handleCloseEditDialog = () => {
    setOpenEditDialog(false);
    setSelectedTask(null);
  };
  return (
    <>
      <StyledTableContainer>
        <StyledTable>
          <TodoTableHead
            dispatch={dispatch}
            handleChangePages={handleChangePages}
          />
          <TodoTableBody handleEditTaskClick={handleEditTaskClick} />
        </StyledTable>
        <Stack spacing={2}>
          <Pagination
            count={Math.ceil(sortedTodos.length / todos.pageSize)}
            color="secondary"
            onChange={(_e, value) => handleChangePages(value)}
            page={todos.currentPage}
          />
        </Stack>
      </StyledTableContainer>
      {selectedTask && (
        <EditTaskDialog
          open={openEditDialog}
          onClose={handleCloseEditDialog}
          task={selectedTask}
        />
      )}
    </>
  );
};
