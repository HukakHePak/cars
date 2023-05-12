import Footer from "components/Footer/Footer";
import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Content } from "rsuite";
import Header from "components/Header/Header";
import clsx from "clsx";
import style from "./style";

function Landing() {
  return (
    <div className={clsx("red-scroll", style.containLand)}>
      <Container className={style.contLand}>
        <Header />
        <Content className={style.wrapLand}>
          <Outlet />
        </Content>
        <Footer />
      </Container>
    </div>
  );
}

export default Landing;
