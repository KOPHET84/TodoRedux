import { styled, Typography, IconButton } from "@mui/material";

export const HeadTypography = styled(Typography)(({ theme }) => ({
  ...theme.typography.h6,
  "@media (max-width: 768px)": {
    fontSize: "20px",
    padding: "10px",
  },
  "@media (max-width: 480px)": {
    fontSize: "15px",
    padding: "5px",
  },
}));

export const IconStyledButton = styled(IconButton)({
  padding: "0px",
});
