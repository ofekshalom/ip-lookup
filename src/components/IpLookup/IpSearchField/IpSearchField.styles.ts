import { Box, Typography, styled } from "@mui/material";

export const StyledBoxWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "flex-start",
  gap: theme.spacing(2),
}));

export const StyledBoxItemIndexWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: "#919eab29",
  borderRadius: "6px",
  marginTop: theme.spacing(2),
}));

export const StyledTypographyIndex = styled(Typography)(() => ({
  color: "#637381",
  padding: "2px 8px",
}));
