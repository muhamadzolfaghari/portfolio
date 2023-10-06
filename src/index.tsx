import React from "react";
import ReactDOM from "react-dom/client";
import theme from "./theme.const";
import RTL from "./Theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RTL>
          <App />
        </RTL>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);
