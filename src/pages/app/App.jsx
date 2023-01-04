import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Container, Content, Footer } from "rsuite";
import Background from "components/Background/Background";
import Sidebar from "components/Sidebar/Sidebar";
import Img from "assets/img/backgrounds/sidebar_car.jpg";
import { observer } from "mobx-react-lite";
import useStore from "hooks/useStore";
import style from "./style";

function App() {
  const { auth } = useStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.user) navigate("/login");
  });

  return auth.user ? (
    <>
      <Background url={Img} className={style.background} />
      <Container className={style.app}>
        <div className={style.wrap}>
          <Content className={style.main}>
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
