import React from "react";
import { roles } from "models/user";
import Cars from "pages/cars/Cars";
import Profile from "pages/profile/Profile";
import Logout from "pages/logout/Logout";

const { director, admin, manager, stuff } = roles;

const routes = [
  {
    label: "Автомобили",
    path: "/",
    access: [],
    component: <Cars />,
  },
  {
    label: "Комплекты",
    path: "complects",
    access: [director, admin, manager, stuff],
    component: <Profile />,
  },
  {
    label: "Запчасти",
    path: "details",
    access: [],
    component: <Profile />,
  },
  {
    label: "История",
    path: "history",
    access: [],
    component: <Profile />,
  },
  {
    label: "Управление",
    path: "statistic",
    access: [],
    component: <Profile />,
  },
  {
    label: "Профиль",
    path: "profile",
    access: [],
    component: <Profile />,
  },
  {
    label: "Выход",
    path: "logout",
    access: [],
    component: <Logout />,
  },
];

export default routes;
