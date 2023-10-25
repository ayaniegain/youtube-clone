import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App, { appRouter } from "./App";
import { Outlet, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./utils/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  </React.StrictMode>
);
