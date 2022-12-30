import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Schema } from "rsuite";
import style from "./style.scss";

const model = Schema.Model({
  login: Schema.Types.StringType().isRequired("Неверный логин"),
  password: Schema.Types.StringType().isRequired("Неверный пароль"),
});

const formDefault = {};

function AuthForm() {
  const navigate = useNavigate();
  const [values, setValues] = useState(formDefault);
  console.log(values);

  return (
    <Form
      fluid
      formValue={values}
      model={model}
      className={style.form}
      onChange={(v) => setValues(v)}
      onCheck={(err) => !err && navigate("/")}
      onSubmit={console.log}
    >
      <Form.Control name="login" placeholder="Логин" />
      <Form.ErrorMessage>Неверный логин</Form.ErrorMessage>
      <Form.Control name="password" placeholder="Пароль" />
      <Form.ErrorMessage>Неверный пароль</Form.ErrorMessage>
      <Button appearance="primary" type="submit">
        Войти
      </Button>
      <Button type="submit" as={Link} to="/" className={style.link}>
        Забыли пароль?
      </Button>
    </Form>
  );
}

export default AuthForm;
