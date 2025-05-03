import { styled, Table, TableContainer, TableCell } from "@mui/material";

export const StyledTable = styled(Table)({
  minWidth: "700px",
  "@media (max-width: 768px)": {
    minWidth: "500px",
  },
  "@media (max-width: 480px)": {
    minWidth: "300px",
  },
});

export const StyledTableContainer = styled(TableContainer)({
  backgroundColor: "#f4c6c6",
});

export const StyledTableCell = styled(TableCell)({
  "@media (max-width: 768px)": {
    fontSize: "20px",
    padding: "10px",
    fontFamily: "serif",
  },
  "@media (max-width: 480px)": {
    fontSize: "18px",
    padding: "4px",
    fontFamily: "serif",
  },
});
