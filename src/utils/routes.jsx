import React from "react";
import { UserType } from "stores/models/user";
import Cars from "pages/cars/Cars";
import Profile from "pages/profile/Profile";
import Logout from "pages/logout/Logout";
import Options from "pages/options/Options";
import path from "./path";

const { director, admin, manager, stuff } = UserType;

const routes = [
  {
    label: "Автомобили",
    path: path.root,
    access: [],
    component: <Cars />,
  },
  {
    label: "Комплекты",
    path: path.complects,
    access: [director, admin, manager, stuff],
    component: <Profile />,
  },
  {
    label: "Запчасти",
    path: path.details,
    access: [],
    component: <Options />,
  },
  {
    label: "История",
    path: path.history,
    access: [],
    component: <Profile />,
  },
  {
    label: "Управление",
    path: path.statistic,
    access: [],
    component: <Profile />,
  },
  {
    label: "Профиль",
    path: path.profile,
    access: [],
    component: <Profile />,
  },
  {
    label: "Выход",
    path: path.logout,
    access: [],
    component: <Logout />,
  },
];

export default routes;
