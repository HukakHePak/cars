import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Container, Content, Footer } from "rsuite";
import Background from "components/Background/Background";
import Sidebar from "components/Sidebar/Sidebar";
import Img from "assets/img/backgrounds/sidebar_car.jpg";
import { observer } from "mobx-react-lite";
import useStore from "hooks/useStore";
import clsx from "clsx";
import ui from "scss/ui";
import style from "./style";

function App() {
  const { auth } = useStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.user) navigate("/login");
  });

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
          <Footer className={style.footer}>content</Footer>
        </div>
      </Container>
      <Sidebar />
    </>
  ) : (
    <div />
  );
}

export default observer(App);
