import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import HOMEPAGE from "pages/HOMEPAGE";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/dfewe", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "/",
      element: <HOMEPAGE />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
