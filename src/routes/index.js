import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./defaultLayout";
import Home from "../module/home";
import Ausstellung2023 from "../module/Ausstellung2023";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Ausstellung2023",
        element: <Ausstellung2023 />,
      },
    ],
  },
]);

export default router;
