import { createBrowserRouter } from "react-router-dom";
import { Welcome } from "../screens";
import { MockData, Root } from "../components";
import { paths } from "./paths";

export const routes = createBrowserRouter([
  {
    path: paths.Default,
    element: <Root />,
    children: [
      {
        path: paths.Default,
        element: <Welcome />,
        index: true,
      },
      {
        path: paths.Welcome,
        element: <Welcome />,
      },
      {
        path: paths.MockData,
        element: <MockData />,
      },
    ],
  },
]);
