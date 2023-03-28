import React from "react";
import { AiFillHome } from "react-icons/ai";
import { useRoutes } from "react-router-dom";

const HomeView = React.lazy(() => import("./views/home"));
export const routes = [
  {
    path: "/home",
    title: "Inicio",
    element: <HomeView/>,
    icon: <AiFillHome />,
  },
];
