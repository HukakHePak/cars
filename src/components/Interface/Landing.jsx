import Footer from "components/Footer/Footer";
import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Content } from "rsuite";
import ui from "scss/ui";
import Header from "components/Header/Header";
import clsx from "clsx";
import style from "./style";

function Landing() {
  return (
    <div className={clsx(ui.redScroll, style.containLand)}>
      <Container className="uk-height-1-1">
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
