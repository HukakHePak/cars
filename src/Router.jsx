import React from "react";
import { createBrowserRouter } from "react-router-dom";
// import Profile from "pages/profile/Profile";
import Login from "pages/login/Login";
// import Cars from "pages/cars/Cars";
import Fallback from "pages/fallback/Fallback";
import secure from "components/Secure/secure";
import Switcher from "components/Interface/Switcher";
import routes from "utils/routes";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Switcher />,
      errorElement: <Fallback />,
      children: routes.map(({ path, component, access }) => ({
        path,
        element: secure(component, access),
      })),
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
