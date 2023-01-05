import Logo from "components/Logo/Logo";
import useStore from "hooks/useStore";
import { observer } from "mobx-react-lite";
import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "rsuite";
import style from "./style";

// const selectHandler = console.log;

function Sidebar() {
  const { auth } = useStore();

  // const selectHandler = (eventName) => {
  //   if (eventName === "logout") auth.logout();
  // };

  return (
    <aside className={style.sidebar}>
      <div className={style.logoWrap}>
        <Logo className={style.logo} />
      </div>
      <Nav
        className={style.nav}
        appearance="subtle"
        vertical
        reversed
        // onSelect={selectHandler}
      >
        <Nav.Item eventKey="profile" as={Link} to="/profile">
          Профиль
        </Nav.Item>
        <Nav.Item eventKey="cars" as={Link} to="/">
          Автомобили
        </Nav.Item>
        <Nav.Item eventKey="logout" onClick={() => auth.logout()}>
          Выход
        </Nav.Item>
      </Nav>
    </aside>
  );
}

export default observer(Sidebar);
