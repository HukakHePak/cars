import Logo from "components/Logo/Logo";
import React from "react";
import { Link } from "react-router-dom";
import { Button, Header as Wrap } from "rsuite";

import style from "./style";

function Header() {
  return (
    <Wrap className={style.header}>
      <Button as={Link} to="/" className={style.button}>
        <Logo as={Link} to="/" className={style.logo} />
      </Button>

      <div className={style.panel}>
        <Button as={Link} to="/login" className={style.button}>
          Войти
        </Button>
      </div>
    </Wrap>
  );
}

export default Header;
