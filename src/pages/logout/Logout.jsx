import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import useStore from "hooks/useStore";
import { Navigate } from "react-router-dom";
import { path } from "utils/Routes";

function Logout() {
  const { auth } = useStore();

  useEffect(() => {
    auth.logout();
  }, []);

  return <Navigate to={path.logout} />;
}

export default observer(Logout);
