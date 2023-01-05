import useStore from "hooks/useStore";
import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { Button, Form } from "rsuite";
import style from "./style";

const defaultForm = {
  login: "",
  password: "",
};

function AuthForm() {
  const { auth } = useStore();

  const [form, setForm] = useState(defaultForm);

  const onSubmit = (valid) => {
    if (valid) auth.login(form);
  };

  return (
    <Form
      fluid
      formValue={form}
      className={style.form}
      onChange={setForm}
      onSubmit={onSubmit}
    >
      {auth.user && <Navigate to="/" />}
      <Form.Control name="login" placeholder="Логин" />
      <div className={style.error}> {auth.error.login} </div>
      <Form.Control name="password" type="password" placeholder="Пароль" />
      <div className={style.error}> {auth.error.password} </div>

      <Button type="submit" className={style.button}>
        Войти
      </Button>
      <Button type="submit" as={Link} to="/forgot" className={style.link}>
        Забыли пароль?
      </Button>
    </Form>
  );
}

export default observer(AuthForm);
