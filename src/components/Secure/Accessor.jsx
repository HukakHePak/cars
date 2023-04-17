import React from "react";
import useStore from "hooks/useStore";
import { observer } from "mobx-react-lite";
import { Navigate } from "react-router-dom";
import { isAccessed } from "utils/helpers";

function Accessor({ children, roles = [] }) {
  const { auth } = useStore();

  return isAccessed(roles, auth.user || {}) ? (
    children
  ) : (
    <Navigate to="/fallback" />
  );
}

export default observer(Accessor);
