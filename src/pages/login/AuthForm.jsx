import useStore from "hooks/useStore";
import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form } from "rsuite";
import style from "./style";

const defaultForm = {
  login: "",
  password: "",
};

function AuthForm() {
  const store = useStore();

  // const navigate = useNavigate();

  // console.log(store.auth.user);

  // useEffect(() => {
  //   if (store.auth.user) navigate("/");
  // }, [store.auth.user]);

  const [form, setForm] = useState(defaultForm);

  const onSubmit = (valid) => {
    if (valid) store.auth.login(form);
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
      <div className={style.error}> </div>
      <Form.Control name="password" type="password" placeholder="Пароль" />
      <div className={style.error}> error </div>

      <Button appearance="primary" type="submit" style={{ marginBottom: 10 }}>
        Войти
      </Button>
      <Button type="submit" as={Link} to="/" className={style.link}>
        Забыли пароль?
      </Button>
    </Form>
  );
}

export default observer(AuthForm);
