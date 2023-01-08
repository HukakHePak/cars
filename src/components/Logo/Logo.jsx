import React from "react";
import Img from "assets/img/logos/best-dio-logo-white.png";
import clsx from "clsx";
import styles from "./style";

function Logo({ style, className }) {
  return (
    <img
      src={Img}
      style={style}
      className={clsx(styles.logo, className)}
      alt=""
    />
  );
}

export default Logo;
