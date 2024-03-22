import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Signup from "pages/Signup";
import Home1 from "pages/Home1";
import Events from "pages/Events";
import SingleEvent from "pages/SingleEvent";
import Settings from "pages/Settings";
import SearchResults from "pages/SearchResults";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "signup",
      element: <Signup />,
    },
    {
      path: "home1",
      element: <Home1 />,
    },
    {
      path: "events",
      element: <Events />,
    },
    {
      path: "singleevent",
      element: <SingleEvent />,
    },
    {
      path: "searchresults",
      element: <SearchResults />,
    },
    {
      path: "settings",
      element: <Settings />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
