import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./defaultLayout";
import Home from "../module/home";
import Ausstellung2023 from "../module/Ausstellung2023";
import Ausstellung2024 from "./../module/Ausstellung2024/index";
import Lwandle from "../module/Lwandle";
import Donate from "../module/Donate";

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
        path: "/ausstellung2023",
        element: <Ausstellung2023 />,
      },
      {
        path: "/ausstellung2024",
        element: <Ausstellung2024 />,
      },
      {
        path: "/lwandle",
        element: <Lwandle />,
      },
      {
        path: "/donate",
        element: <Donate />,
      },
    ],
  },
]);

export default router;
