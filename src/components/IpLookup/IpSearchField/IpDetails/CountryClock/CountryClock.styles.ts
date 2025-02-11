import { Box, Typography, styled } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export const StyledBoxWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(0.5),
}));

export const StyledClockIcon = styled(AccessTimeIcon)(() => ({
  fontSize: "16px",
  color: "#637381",
}));

export const StyledTypography = styled(Typography)(() => ({
  fontSize: "16px",
  fontWeight: 400,
  color: "#1C252E",
}));
