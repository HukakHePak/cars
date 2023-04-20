import React from "react";
import useStore from "hooks/useStore";
import { observer } from "mobx-react-lite";
import { Navigate } from "react-router-dom";
import { isAccessed } from "utils/helpers";
import path from "utils/path";

function Access({ children, roles = [] }) {
  const { auth } = useStore();

  return isAccessed(roles, auth.user || {}) ? (
    children
  ) : (
    <Navigate to={path.fallback} />
  );
}

export const Secure = observer(Access);

export function secure(component, roles = []) {
  return <Access roles={roles}>{component}</Access>;
}
