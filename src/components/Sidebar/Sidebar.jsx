import Logo from "components/Logo/Logo";
import useStore from "hooks/useStore";
import { observer } from "mobx-react-lite";
import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "rsuite";
import Side from "./Side";
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
        {/* <Nav.Item eventKey="profile" as={Link} to="/profile">
          Профиль
        </Nav.Item> */}
        <Side eventKey="cars" as={Link} to="/">
          Автомобили
        </Side>
        <Side eventKey="complects" as={Link} to="/complects">
          Комплекты
        </Side>
        <Side eventKey="details" as={Link} to="/details">
          Запчасти
        </Side>
        <Side name="history" acesss={[]} to="/history">
          История
        </Side>
        <Side name="statistic" acesss={[]} to="/statistic">
          Управление
        </Side>
        <Side name="logout" onClick={() => auth.logout()}>
          Выход
        </Side>
      </Nav>
    </aside>
  );
}

export default observer(Sidebar);
