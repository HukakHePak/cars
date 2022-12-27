import React from "react";
import Img from "assets/img/backgrounds/anume_car.jpg";
import Background from "components/Background/Background";
import AuthForm from "./AuthForm";

function Login() {
  return (
    <div className="uk-margin-auto uk-margin-auto-vertical">
      <Background url={Img} />
      <div className="uk-hidden@m width-1-1">
        <AuthForm />
      </div>
      <div
        className="uk-card uk-card-default uk-visible@m"
        style={{ width: 500, borderRadius: 10 }}
      >
        <AuthForm />
      </div>
    </div>
  );
}

export default Login;
