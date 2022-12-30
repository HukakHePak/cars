import React from "react";
import Img from "assets/img/backgrounds/anume_car.jpg";
import Background from "components/Background/Background";
import AuthForm from "./AuthForm";
import style from "./style.scss";

function Login() {
  return (
    <div style={{ margin: "auto" }}>
      <Background url={Img} className="uk-background-center-right" />
      <div className={style.card}>
        <AuthForm />
      </div>
    </div>
  );
}

export default Login;
