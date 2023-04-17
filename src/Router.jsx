import React from "react";
import { createBrowserRouter } from "react-router-dom";
// import Profile from "pages/profile/Profile";
import Login from "pages/login/Login";
// import Cars from "pages/cars/Cars";
import Fallback from "pages/fallback/Fallback";
import secure from "components/Secure/secure";
import Switcher from "components/Interface/Switcher";
import routes, { path } from "utils/Routes";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Switcher />,
      errorElement: <Fallback />,
      children: routes.map(({ path: p, component, access }) => ({
        path: p,
        element: secure(component, access),
      })),
    },
    {
      path: path.login,
      element: <Login />,
    },
    {
      path: path.fallback,
      element: <Fallback />,
    },
  ],
  { basename: process.env.basename }
);

export default router;
