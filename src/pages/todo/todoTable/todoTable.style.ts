import { styled, Table, TableContainer } from "@mui/material";

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
