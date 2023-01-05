import React from "react";
import useStore from "hooks/useStore";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { Nav } from "rsuite";
import style from "./style";

function Side({ name, to, access = [], onClick = () => {}, children }) {
  const { auth } = useStore();

  return (
    (access.length === 0 || access?.includes(auth.user?.type)) && (
      <Nav.Item
        eventKey={name}
        as={Link}
        to={to}
        onClick={onClick}
        className={style.sideItem}
      >
        {children}
      </Nav.Item>
    )
  );
}

export default observer(Side);
