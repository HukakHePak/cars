import React from "react";
import { observer } from "mobx-react-lite";
import useStore from "hooks/useStore";
import Application from "./Application";
import Landing from "./Landing";

function Switcher() {
  const store = useStore();

  return store.auth.user ? <Application /> : <Landing />;
}

export default observer(Switcher);
