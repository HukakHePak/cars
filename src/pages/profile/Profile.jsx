import useStore from "hooks/useStore";
import { observer } from "mobx-react-lite";
import React from "react";
// import style from "./style.scss";

function Profile() {
  const { auth } = useStore();

  return <div>{auth.user?.name}, hello</div>;
}

export default observer(Profile);
