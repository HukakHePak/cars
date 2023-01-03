import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Content, Footer } from "rsuite";
import Background from "components/Background/Background";
import Sidebar from "components/Sidebar/Sidebar";
import Img from "assets/img/backgrounds/sidebar_car.jpg";
import style from "./style";

function App() {
  return (
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
  );
}

export default App;
