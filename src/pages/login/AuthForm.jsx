import React from "react";
import { Link, useNavigate, Form } from "react-router-dom";
import { Button, Input } from "rsuite";
import style from "./style.scss";

function AuthForm() {
  const navigate = useNavigate();

  return (
    <Form
      className={style.form}
      onSubmit={(isValid) => isValid && navigate("/")}
    >
      <div>
        <Input name="login" placeholder="Логин" />
        <div className={style.error}> </div>
        <Input name="password" type="password" placeholder="Пароль" />
        <div className={style.error}> error </div>
      </div>
      <Button appearance="primary" type="submit" style={{ marginBottom: 10 }}>
        Войти
      </Button>
      <Button type="submit" as={Link} to="/" className={style.link}>
        Забыли пароль?
      </Button>
    </Form>
  );
}

export default AuthForm;
