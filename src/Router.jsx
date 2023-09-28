import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./components/App/App";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import ErrorPage from "./components/ErrorPage/ErrorPage";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/shop",
          element: <Shop />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
