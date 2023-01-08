import Footer from "components/Footer/Footer";
import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Content } from "rsuite";
import ui from "scss/ui";
import Header from "components/Header/Header";
import style from "./style";

function Landing() {
  return (
    <Container className={ui.redScroll}>
      <Header />
      <Content className={style.wrapLand}>
        <Outlet />
      </Content>
      <Footer />
    </Container>
  );
}

export default Landing;
