import App from "../src/components/App/App";
import Home from "../src/components/Home/Home";
import Shop from "../src/components/Shop/Shop";
import ErrorPage from "../src/components/ErrorPage/ErrorPage";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";

const appRoutes = [
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
];

export function renderTestRouter(path) {
  const router = createMemoryRouter(appRoutes, { initialEntries: [path] });
  render(<RouterProvider router={router}></RouterProvider>);
}
