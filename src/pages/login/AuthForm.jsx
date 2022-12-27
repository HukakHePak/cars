import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Schema } from "rsuite";

const model = Schema.Model({
  login: Schema.Types.StringType().isRequired("Неверный логин"),
  password: Schema.Types.StringType().isRequired("Неверный пароль"),
});

function AuthForm() {
  const navigate = useNavigate();

  return (
    <Form
      fluid
      model={model}
      className="uk-flex uk-flex-column"
      style={{ gap: 20, padding: 40, paddingTop: 80 }}
      onCheck={(err) => !err && navigate("/")}
    >
      <Form.Control name="login" placeholder="Логин" />
      <Form.ErrorMessage>Неверный логин</Form.ErrorMessage>
      <Form.Control name="password" placeholder="Пароль" />
      <Form.ErrorMessage>Неверный пароль</Form.ErrorMessage>
      <Button appearance="primary" type="submit">
        Войти
      </Button>
      <Link to="/" className="uk-text-center">
        Забыли пароль?
      </Link>
    </Form>
  );
}

export default AuthForm;
