import { Box, styled } from "@mui/material";

export const StyledBoxWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  marginTop: theme.spacing(1),
}));

interface StyledBoxImageProps {
  src: string;
  alt?: string;
  component: string;
}

export const StyledBoxImage = styled(Box)<StyledBoxImageProps>(({ theme }) => ({
  width: "40px",
}));
