import React from "react";
import ReactDOM from "react-dom/client";
import theme from "./theme.const";
import RTL from './Theme'
import {CssBaseline, ThemeProvider} from "@mui/material";
import App from "./App";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <RTL>
                <App/>
            </RTL>
        </ThemeProvider>
    </React.StrictMode>
);
