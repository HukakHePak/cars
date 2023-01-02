import React from "react";
import scss from "./style";

function Background({ url, className, style }) {
  return (
    <div
      className={`${scss.background} ${className}`}
      style={{ backgroundImage: `url(${url})`, ...style }}
    />
  );
}

export default Background;
