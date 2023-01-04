import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "pages/app/App";
import Profile from "pages/profile/Profile";
import Login from "pages/login/Login";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "profile",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ],
  { basename: process.env.basename }
);

export default router;
