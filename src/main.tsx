import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./user.InterfaceLayer/shared/assets/styles/default.style.css";
import "./user.InterfaceLayer/shared/assets/styles/fonts.style.css";
import "./user.InterfaceLayer/shared/assets/styles/styled.css";
import store from "./business.InterfaceLayer/store/reducers/rootReducer.ts";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import mainRouter from "./user.InterfaceLayer/router/index.tsx";

const routers = createBrowserRouter(mainRouter);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ToastContainer />
    <Provider store={store}>
      <RouterProvider router={routers} />
    </Provider>
  </React.StrictMode>
);
