import React from "react";
import scss from "./style";

function Background({
  url,
  className = "",
  style,
  overlayColor = "transparent",
  blur,
}) {
  return (
    <div
      className={`${scss.overlay} ${className}`}
      style={{
        backgroundImage: `url(${url})`,
        filter: blur && `blur(${blur}px)`,
        ...style,
      }}
    >
      <div
        style={{ backgroundColor: overlayColor }}
        className={scss.background}
      />
    </div>
  );
}

export default Background;
