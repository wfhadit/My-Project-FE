// import React from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./redux";
import { Provider } from "react-redux";
import { AuthProvider } from "./hoc/auth-provider.jsx";

const store = configureStore({ reducer: rootReducer });
createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);
