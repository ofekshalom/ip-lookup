import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./translations/i18";
import reportWebVitals from "./reportWebVitals";
import { IpLookup } from "./components/IpLookup/IpLookup";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <IpLookup />
  </React.StrictMode>
);

reportWebVitals();
