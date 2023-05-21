import useStore from "hooks/useStore"
import { observer } from "mobx-react-lite"
import React, { useState } from "react"
import { Button, ButtonToolbar, Form } from "rsuite"
import { User } from "stores/models/user"
import style from "./style"

function Profile() {
  const { auth } = useStore()
  const user = auth.user ?? new User()
  const { name, surname, patronymic, phone, email, login } = user

  const [formValue, setFormValue] = useState(user.info)
  const [error, setError] = useState()
  const handleFormSubmit = () => {
    auth.user.setUser(formValue, true).catch((err) => {
      setError(err)
    })
  }

  const handleFormValueChange = (v) => {
    setFormValue({
      ...formValue,
      ...v
    })
  }

  return (
    <Form onSubmit={handleFormSubmit} onChange={handleFormValueChange} formError={error} className={style.form}>
      <Form.Group controlId="name-1">
        <Form.ControlLabel>Name</Form.ControlLabel>
        <Form.Control name="name" defaultValue={name} maxLength={45} />
      </Form.Group>
      <Form.Group controlId="surname-1">
        <Form.ControlLabel>Surname</Form.ControlLabel>
        <Form.Control name="surname" defaultValue={surname} maxLength={45} />
      </Form.Group>
      <Form.Group controlId="patronymic-1">
        <Form.ControlLabel>Patronymic</Form.ControlLabel>
        <Form.Control name="patronymic" defaultValue={patronymic} maxLength={45} />
      </Form.Group>
      <Form.Group controlId="phone-1">
        <Form.ControlLabel>Phone</Form.ControlLabel>
        <Form.Control name="phone" type="phone" defaultValue={phone} maxLength={10} />
      </Form.Group>
      <Form.Group controlId="email-1">
        <Form.ControlLabel>Email</Form.ControlLabel>
        <Form.Control name="email" defaultValue={email} maxLength={45} />
      </Form.Group>
      <Form.Group controlId="login-1">
        <Form.ControlLabel>Login</Form.ControlLabel>
        <Form.Control name="login" defaultValue={login} maxLength={8} />
      </Form.Group>
      <Form.Group>
        <ButtonToolbar>
          <Button appearance="primary" type="submit">
            Submit
          </Button>
          <Button appearance="default" type="reset">
            Cancel
          </Button>
        </ButtonToolbar>
      </Form.Group>
    </Form>
  )
}

export default observer(Profile)
