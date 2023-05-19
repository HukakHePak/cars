import React from "react"
import Img from "assets/img/backgrounds/anume_car.jpg"
import Background from "components/Background/Background"
import AuthForm from "./AuthForm"
import style from "./style"

function Login() {
  return (
    <div style={{ margin: "auto" }}>
      <Background url={Img} className={style.background} overlayColor="rgba(255, 255, 255, 0.386)" blur="2" />
      <div className={style.card}>
        <AuthForm />
      </div>
    </div>
  )
}

export default Login
