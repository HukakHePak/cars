import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import useStore from "hooks/useStore";
import { Navigate } from "react-router-dom";

function Logout() {
  const { auth } = useStore();

  useEffect(() => {
    auth.logout();
  }, []);

  return <Navigate to="/login" />;
}

export default observer(Logout);
