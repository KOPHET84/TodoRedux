import { filterTasks, sortTasks } from "../../../../features/todo/todoSLice"; //
import { AppDispatch } from "../../../../app/store";
import { useAppSelector } from "../../../../app/reduxHooks";
import { TableHead, TableRow } from "@mui/material";
import { useState } from "react";
import { ICONSTODO } from "../../todo.const";
import { HeadTypography, IconStyledButton } from "./todoTableHead.style";
import { StyledTableCell } from "../todoTable.style";

export const TodoTableHead = ({
  handleChangePages,
  dispatch,
}: {
  handleChangePages: (value: number) => void;
  dispatch: AppDispatch;
}) => {
  const todos = useAppSelector((state) => state.todo);
  const iconsFilter = ICONSTODO.iconsFilter;
  const iconsSort = ICONSTODO.iconsSort;
  const [filterIcon, setFilterIcon] = useState(0);
  const [sortIcon, setSortIcon] = useState(0);

  const handleFilterChange = (filter: string) => {
    if (filter === "") {
      setFilterIcon((e) => e + 1);
      filter = "completed";
    } else if (filter === "not completed") {
      setFilterIcon(0);
      filter = "";
    } else {
      filter = "not completed";
      setFilterIcon((e) => e + 1);
    }
    dispatch(filterTasks(filter));
    handleChangePages(1);
  };

  const handleSortChange = (sortOrder: string) => {
    sortOrder = sortOrder === "asc" ? "desc" : "asc";
    if (sortOrder === "asc") setSortIcon(0);
    else setSortIcon(1);
    dispatch(sortTasks(sortOrder));
  };

  return (
    <TableHead>
      <TableRow>
        <StyledTableCell>
          <HeadTypography>Title task</HeadTypography>
        </StyledTableCell>
        <StyledTableCell>
          <HeadTypography>
            <IconStyledButton onClick={() => handleSortChange(todos.sortDate)}>
              {iconsSort[sortIcon]}
            </IconStyledButton>
            createdAt
          </HeadTypography>
        </StyledTableCell>
        <StyledTableCell>
          <HeadTypography>
            <IconStyledButton
              onClick={() => handleFilterChange(todos.filterStatus)}
            >
              {iconsFilter[filterIcon]}
            </IconStyledButton>
            Status
          </HeadTypography>
        </StyledTableCell>
        <StyledTableCell>
          <HeadTypography>Delete</HeadTypography>
        </StyledTableCell>
      </TableRow>
    </TableHead>
  );
};
