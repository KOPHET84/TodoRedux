import { styled, Typography, IconButton } from "@mui/material";

export const HeadTypography = styled(Typography)(({ theme }) => ({
  ...theme.typography.h6,
}));

export const IconStyledButton = styled(IconButton)({
  padding: "0px",
});
