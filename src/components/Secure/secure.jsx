import React from "react";
import Accessor from "./Accessor";

function secure(component, r = []) {
  return <Accessor roles={r}>{component}</Accessor>;
}

export default secure;
