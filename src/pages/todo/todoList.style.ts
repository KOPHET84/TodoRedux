import { createTheme, styled, Box, Typography } from "@mui/material";
export const theme = createTheme({
  typography: {
    fontFamily: "cursive",
    body1: {
      fontSize: "16px",
      "@media (max-width: 768px)": {
        fontFamily: "serif",
      },
      "@media (max-width: 480px)": {
        fontFamily: "serif",
      },
    },
    button: {
      fontWeight: 600,
      "@media (max-width: 768px)": {
        fontFamily: "serif",
      },
      "@media (max-width: 480px)": {
        fontFamily: "serif",
      },
    },
  },
  palette: {
    primary: {
      main: "#4caf50",
    },
    secondary: {
      main: "#f1a7c5",
    },
    background: {
      default: "#fce4ec",
    },
  },
});

export const StyledBox = styled(Box)({
  borderRadius: 1,
  backgroundColor: "#f8c7d1",
});
export const StyledTypography = styled(Typography)(({ theme }) => ({
  ...theme.typography.h5,
}));
