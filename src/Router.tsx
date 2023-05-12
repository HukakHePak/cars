import React from "react"
import { createBrowserRouter } from "react-router-dom"
// import Profile from "pages/profile/Profile";
import Login from "pages/login/Login"
// import Cars from "pages/cars/Cars";
import Fallback from "pages/fallback/Fallback"
import { secure } from "components/Secure/Secure"
import Switcher from "components/Interface/Switcher"
import routes from "utils/routes"
import path from "utils/path"
import Car from "pages/car/Car"
import Create from "pages/car/Create"

const router = createBrowserRouter(
  [
    {
      path: path.root,
      element: <Switcher />,
      errorElement: <Fallback />,
      children: [
        ...routes.map(({ path: p, component, access }) => ({
          path: p,
          element: secure(component, access)
        })),
        {
          path: `${path.cars}/:id`,
          element: <Car />
        },
        {
          path: `${path.cars}/create`,
          element: <Create />
        }
      ]
    },
    {
      path: path.login,
      element: <Login />
    },
    {
      path: path.fallback,
      element: <Fallback />
    }
  ],
  { basename: process.env.basename }
)

export default router
