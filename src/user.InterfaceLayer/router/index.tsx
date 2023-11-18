import { Suspense } from "react";
import { MainPage } from "../Pages/Main.Page";
import { SignInPage } from "../Pages/SignIn";
import { SignUpPage } from "../Pages/SignUp";
import { TodosPage } from "../Pages/Todos.Page";
import Loader from "../Components/general.components/Loader";
import Error from "../Components/general.components/Error";
import App from "../../App";
import { Navigate } from "react-router-dom";

const mainRouter = [
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <App />
      </Suspense>
    ),
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loader />}>
            <MainPage />
          </Suspense>
        ),
        errorElement: <Error />,
      },
      {
        path: "/projects/:projectId/todos",
        element: (
          <Suspense fallback={<Loader />}>
            <TodosPage />
          </Suspense>
        ),
        errorElement: <Error />,
      },

      {
        path: "/signin",
        element: (
          <Suspense fallback={<Loader />}>
            <SignInPage />
          </Suspense>
        ),
        errorElement: <Error />,
      },
      {
        path: "/signup",
        element: (
          <Suspense fallback={<Loader />}>
            <SignUpPage />
          </Suspense>
        ),
        errorElement: <Error />,
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<Loader />}>
            <Navigate to="/" replace />
          </Suspense>
        ),
      },
    ],
  },
];

export default mainRouter;
