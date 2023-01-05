import React from "react";
import { Outlet } from "react-router-dom";
import { Content } from "rsuite";
import Background from "components/Background/Background";
import Sidebar from "components/Sidebar/Sidebar";
import Img from "assets/img/backgrounds/sidebar_car.jpg";
import clsx from "clsx";
import ui from "scss/ui";
import style from "./style";

function Application() {
  return (
    <div className={style.app}>
      <Background
        url={Img}
        className={style.background}
        overlayColor="rgba(255, 255, 255, 0.386)"
        blur={2}
      />
      <Content className={clsx(style.wrap, ui.redScroll)}>
        <Outlet />
      </Content>
      <Sidebar />
    </div>
  );
}

export default Application;
