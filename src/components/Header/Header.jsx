import Logo from "components/Logo/Logo"
import React from "react"
import { Link } from "react-router-dom"
import { Button, Header as Wrap } from "rsuite"
import path from "utils/path"

import style from "./style"

function Header() {
  return (
    <Wrap className={style.header}>
      <Button as={Link} to={path.root} className={style.button}>
        <Logo as={Link} to={path.root} className={style.logo} />
      </Button>

      <div className={style.panel}>
        <Button as={Link} to={path.login} className={style.button}>
          Войти
        </Button>
      </div>
    </Wrap>
  )
}

export default Header
