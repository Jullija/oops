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
        path: paths.Welcome,
        element: <Welcome />,
        index: true,
      },
      {
        path: paths.MockData,
        element: <MockData />,
      },
    ],
  },
]);
