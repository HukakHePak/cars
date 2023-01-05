import React from "react";
import Accessor from "./Accessor";

const director = "D";
const admin = "A";
const manager = "M";
const stuff = "S";
const unauth = "U";

export const roles = {
  director,
  admin,
  manager,
  stuff,
  unauth,
};

export function secure(Component, r = []) {
  return <Accessor roles={r}>{Component}</Accessor>;
}
