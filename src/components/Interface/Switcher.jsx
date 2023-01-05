import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Content } from "rsuite";
import Background from "components/Background/Background";
import Sidebar from "components/Sidebar/Sidebar";
import Img from "assets/img/backgrounds/sidebar_car.jpg";
import { observer } from "mobx-react-lite";
import useStore from "hooks/useStore";
import clsx from "clsx";
import ui from "scss/ui";
import Footer from "components/Footer/Footer";
import style from "./style";

function App() {
  const { auth } = useStore();

  return auth.user ? (
    <>
      <Background
        url={Img}
        className={style.background}
        overlayColor="rgba(255, 255, 255, 0.386)"
        blur={2}
      />
      <Container className={style.app}>
        <div className={clsx(style.wrap, ui.redScroll)}>
          <Content className={style.content}>
            <Outlet />
          </Content>
          <Footer />
        </div>
      </Container>
      <Sidebar />
    </>
  ) : (
    <div>
      <Outlet />
    </div>
  );
}

export default observer(App);
