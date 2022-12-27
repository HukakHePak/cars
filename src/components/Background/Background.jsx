import React from "react";
import style from "./style.scss";

function Background({ url }) {
  return (
    <div
      className={style.background}
      style={{ backgroundImage: `url(${url})` }}
    />
  );
}

export default Background;
