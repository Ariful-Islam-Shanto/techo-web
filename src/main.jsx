import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/routes/routes.jsx";
import { Provider } from "react-redux";
import { store } from "./Redux Store/Store.jsx";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
      <RouterProvider router={routes}></RouterProvider>
      <Toaster/>
      </AuthProvider>
    </Provider>
  </React.StrictMode>
);
