import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Button, Container, Content, Footer, Header, Sidebar } from "rsuite";
import Background from "components/Background/Background";
import { observer } from "mobx-react-lite";
import useStore from "hooks/useStore";
import style from "./style";
// import RootStoreModel from "stores/root";

const url =
  "https://kartinkin.net/uploads/posts/2021-07/1626959849_12-kartinkin-com-p-anime-vozle-mashini-anime-krasivo-12.jpg";

function App() {
  const store = useStore();

  return (
    <>
      <Background url={url} className={style.background} />
      <Container className={style.app}>
        <Header>
          <h1>My React App!</h1>
        </Header>

        <Content>
          <div>{store.user.name}</div> <Outlet />
        </Content>
        <Footer>
          <button type="button" onClick={() => store.setName("Vitaliy")}>
            magic button
          </button>
          <button type="button" className={style.btn}>
            <Link to="/profile">Profile</Link>
          </button>
          <Button type="button" className={style.btn}>
            <Link to="/login">Login</Link>
          </Button>
        </Footer>
      </Container>
      <Sidebar />
    </>
  );
}

export default observer(App);
