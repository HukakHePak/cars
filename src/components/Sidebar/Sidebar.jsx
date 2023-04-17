import Logo from "components/Logo/Logo";
import useStore from "hooks/useStore";
import { observer } from "mobx-react-lite";
import React from "react";
import { Nav } from "rsuite";
import { isAccessed } from "utils/helpers";
import routes from "utils/Routes";
import Side from "./Side";
import style from "./style";

function Sidebar() {
  const { auth } = useStore();

  return (
    <aside className={style.sidebar}>
      <div className={style.logoWrap}>
        <Logo className={style.logo} />
      </div>
      <Nav className={style.nav} appearance="subtle" vertical reversed>
        {routes.map(
          ({ path, label, access }) =>
            isAccessed(access, auth.user || {}) && (
              <Side key={path} name={path} to={path}>
                {label}
              </Side>
            )
        )}
      </Nav>
    </aside>
  );
}

export default observer(Sidebar);
