import React from "react"
import { createBrowserRouter } from "react-router-dom"
import Login from "pages/login/Login"
import Fallback from "pages/fallback/Fallback"
import { secure } from "components/Secure/Secure"
import Switcher from "components/Interface/Switcher"
import routes from "utils/routes"
import path from "utils/path"
import Car from "pages/car/Car"
import Create from "pages/car/Create"
import CreateOption from "pages/options/CreateOption"

const router = createBrowserRouter([
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
      },
      {
        path: `${path.details}/create`,
        element: <CreateOption />
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
])

export default router
