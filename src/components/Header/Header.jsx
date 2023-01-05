import Logo from "components/Logo/Logo";
import React from "react";
import { Link } from "react-router-dom";
import { Button, Header as Wrap } from "rsuite";

import style from "./style";

function Header() {
  return (
    <Wrap className={style.header}>
      <Logo className={style.logo} />

      <div className={style.panel}>
        <Button as={Link} to="/login" className={style.button}>
          Войти
        </Button>
      </div>
    </Wrap>
  );
}

export default Header;
