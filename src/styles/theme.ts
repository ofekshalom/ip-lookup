import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1C252E",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#fff",
          padding: "8px 16px",
          borderRadius: "8px",
          fontSize: "14px",
          fontWeight: 600,
          textTransform: "none",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          transition: "background-color 0.3s, transform 0.3s",
          "&:hover": {
            backgroundColor: "#454F5B",
          },
          "&:active": {
            backgroundColor: "#454F5B",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "8px",
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: "#1C252E",
          color: "#fff",
          fontSize: "12px",
          borderRadius: "4px",
          fontWeight: 400,
        },
        arrow: {
          color: "#1C252E",
        },
      },
    },
  },
});
