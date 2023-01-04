import useStore from "hooks/useStore";
import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form } from "rsuite";
import style from "./style";

const defaultForm = {
  login: "",
  password: "",
};

function AuthForm() {
  const { auth } = useStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.user) navigate("/");
  }, [auth.user]);

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
      <Form.Control name="login" placeholder="Логин" />
      <div className={style.error}> {auth.error.login} </div>
      <Form.Control name="password" type="password" placeholder="Пароль" />
      <div className={style.error}> {auth.error.password} </div>

      <Button appearance="primary" type="submit" style={{ marginBottom: 10 }}>
        Войти
      </Button>
      <Button type="submit" as={Link} to="/forgot" className={style.link}>
        Забыли пароль?
      </Button>
    </Form>
  );
}

export default observer(AuthForm);
