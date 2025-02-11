import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./translations/i18";
import reportWebVitals from "./reportWebVitals";
import { IpLookup } from "./components/IpLookup/IpLookup";
import { ThemeProvider } from "@mui/material";
import { theme } from "./styles/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <IpLookup />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
