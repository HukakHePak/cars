import React from "react";
import useStore from "hooks/useStore";
import { observer } from "mobx-react-lite";
import { Navigate } from "react-router-dom";

function Accessor({ children, roles = [] }) {
  const store = useStore();

  return roles.includes(store.auth.user?.type) ? (
    children
  ) : (
    <Navigate to="/fallback" />
  );
}

export default observer(Accessor);
