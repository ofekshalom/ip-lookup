import { Box, Button, Typography, styled } from "@mui/material";
import Card from "@mui/material/Card";

export const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  gap: "8px",
  flexDirection: "column",
  margin: "10vh auto",
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  boxShadow:
    "0 0 2px 0 rgba(145 158 171 / 0.2), 0 12px 24px -4px rgba(145 158 171 / 0.12)",
  maxWidth: "550px",
  maxHeight: "70vh",
  borderRadius: theme.spacing(2),
}));

export const StyledHeader = styled(Typography)(() => ({
  fontSize: "18px",
  fontWeight: 600,
  color: "#1C252E",
}));

export const StyledSubHeader = styled(Typography)(() => ({
  fontSize: "14px",
  fontWeight: 400,
  color: "#637381",
}));

export const StyledAddButton = styled(Button)(() => ({
  alignSelf: "flex-end",
}));

export const StyledBoxIpSearchWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  overflowY: "auto",
}));
