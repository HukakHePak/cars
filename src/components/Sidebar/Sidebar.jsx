import useStore from "hooks/useStore";
import { observer } from "mobx-react-lite";
import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "rsuite";
import style from "./style";

const selectHandler = console.log;

function Sidebar() {
  const { auth } = useStore();

  return (
    <aside className={style.sidebar}>
      <Nav
        className={style.nav}
        appearance="subtle"
        vertical
        reversed
        onSelect={selectHandler}
      >
        <Nav.Item eventKey="profile" as={Link} to="/profile">
          Профиль
        </Nav.Item>
        <Nav.Item eventKey="cars" as={Link} to="/">
          Автомобили
        </Nav.Item>
        <Nav.Item
          eventKey="login"
          as={Link}
          to="/login"
          onClick={auth.logout()}
        >
          Выход
        </Nav.Item>
      </Nav>
    </aside>
  );
}

export default observer(Sidebar);
