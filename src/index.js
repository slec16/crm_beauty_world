import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { AuthProvider } from './contexts/AuthContext';

ReactDOM.render((
    <BrowserRouter>
        <App />
        <AuthProvider>
            <App />
        </AuthProvider>
    </BrowserRouter>
), document.getElementById("root"));