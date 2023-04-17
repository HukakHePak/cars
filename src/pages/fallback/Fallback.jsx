import Background from "components/Background/Background";
import React from "react";
import Img from "assets/img/backgrounds/fallback.jpg";
import style from "./style";

function Fallback() {
  return <Background url={Img} className={style.root} />;
}

export default Fallback;
