import React from "react";
import { AiFillHome } from "react-icons/ai";

const HomeView = React.lazy(() => import("./views/home"));
export const routes = [
  {
    path: "/home",
    title: "Inicio",
    element: <HomeView />,
    icon: <AiFillHome />,
  },
];
