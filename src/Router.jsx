import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "pages/app/App";
import Profile from "pages/profile/Profile";
import Login from "pages/login/Login";
import Cars from "pages/cars/Cars";
import Fallback from "pages/fallback/Fallback";
import { secure, roles } from "components/Secure/secure";

const { director, admin, manager, stuff } = roles;
// const { director, admin, manager, stuff, unauth } = roles;

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <Fallback />,
      children: [
        {
          path: "/",
          element: <Cars />,
        },
        {
          path: "profile",
          element: secure(<Profile />, [director, admin, manager, stuff]),
        },
      ],
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "fallback",
      element: <Fallback />,
    },
  ],
  { basename: process.env.basename }
);

export default router;
