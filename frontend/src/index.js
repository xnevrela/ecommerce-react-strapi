import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ThemeProvider} from "@mui/material/styles";
import {CssBaseline} from "@mui/material";
import {theme} from "./theme";
import {configureStore} from "@reduxjs/toolkit";
import cartReducer from './state/index';
import {Provider} from "react-redux";

const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <App/>
            </ThemeProvider>
        </Provider>
    </React.StrictMode>
);